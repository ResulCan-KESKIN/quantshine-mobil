import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type BackendRole = "ADMIN" | "ADVISOR" | "INVESTOR";
export type AppRole = "admin" | "advisor" | "investor";

function mapRole(r: string): AppRole | null {
  switch (r) {
    case "ADMIN":
      return "admin";
    case "ADVISOR":
      return "advisor";
    case "INVESTOR":
      return "investor";
    default:
      return null;
  }
}

type AuthState = {
  isLoading: boolean;

  // Session (RAM only) — her açılışta kapalı başlar
  isAuthenticated: boolean;
  role: AppRole | null;
  backendRole: BackendRole | null;
  token: string | null;

  // Remember-me (persist) — sadece username
  rememberMe: boolean;
  rememberedUsername: string;
};

type LoginResult = { ok: true; role: AppRole } | { ok: false; error: string };

type AuthContextType = AuthState & {
  setRememberMe: (v: boolean) => void;
  setRememberedUsername: (u: string) => void;

  login: (username: string, password: string) => Promise<LoginResult>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const REMEMBER_KEY = "qs_remember_v1"; // sadece { rememberMe, username }

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    isLoading: true,

    isAuthenticated: false,
    role: null,
    backendRole: null,
    token: null,

    rememberMe: false,
    rememberedUsername: "",
  });

  // ✅ Uygulama açılışında: session KAPALI, sadece username oku
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(REMEMBER_KEY);
        if (!raw) {
          setState((s) => ({ ...s, isLoading: false }));
          return;
        }

        const parsed = JSON.parse(raw) as {
          rememberMe?: boolean;
          username?: string;
        };
        setState((s) => ({
          ...s,
          isLoading: false,
          rememberMe: !!parsed.rememberMe,
          rememberedUsername: parsed.username ?? "",
        }));
      } catch {
        await AsyncStorage.removeItem(REMEMBER_KEY);
        setState((s) => ({
          ...s,
          isLoading: false,
          rememberMe: false,
          rememberedUsername: "",
        }));
      }
    })();
  }, []);

  function setRememberMe(v: boolean) {
    setState((s) => ({ ...s, rememberMe: v }));
  }

  function setRememberedUsername(u: string) {
    setState((s) => ({ ...s, rememberedUsername: u }));
  }

  async function persistRemember(username: string, rememberMe: boolean) {
    if (!rememberMe) {
      await AsyncStorage.removeItem(REMEMBER_KEY);
      return;
    }
    await AsyncStorage.setItem(
      REMEMBER_KEY,
      JSON.stringify({ rememberMe: true, username }),
    );
  }

  // ✅ LOGIN: token/role persist edilmez, sadece RAM
  async function login(
    username: string,
    password: string,
  ): Promise<LoginResult> {
    if (!username || !password) {
      return { ok: false, error: "Kullanıcı adı ve şifre gerekli." };
    }

    // ✅ yalnızca username hatırla
    try {
      await persistRemember(username, state.rememberMe);
    } catch (e) {
      console.log("remember persist error:", e);
      // persist patlasa da login devam etsin
    }

    // MOCK rol seçimi (backend büyük harf dönecek gibi)
    let backendRole: BackendRole = "INVESTOR";
    const u = username.toLowerCase();
    if (u.includes("admin")) backendRole = "ADMIN";
    else if (u.includes("advisor") || u.includes("danisman"))
      backendRole = "ADVISOR";
    else backendRole = "INVESTOR";

    const role = mapRole(backendRole);
    if (!role) return { ok: false, error: "Rol çözümlenemedi." };

    console.log("LOGIN ROLE:", backendRole, role);

    setState((s) => ({
      ...s,
      isAuthenticated: true,
      role,
      backendRole,
      token: "mock-token-123",
    }));

    // ✅ login ekranı direkt yönlendirebilsin
    return { ok: true, role };
  }

  // ✅ LOGOUT: session kapanır (rememberMe açıksa username kalır)
  async function logout() {
    try {
      await persistRemember(state.rememberedUsername, state.rememberMe);
    } catch {}

    setState((s) => ({
      ...s,
      isAuthenticated: false,
      role: null,
      backendRole: null,
      token: null,
    }));
  }

  const value = useMemo(
    () => ({
      ...state,
      setRememberMe,
      setRememberedUsername,
      login,
      logout,
    }),
    [state],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
