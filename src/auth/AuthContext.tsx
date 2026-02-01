import React, { createContext, useContext, useMemo, useState } from "react";

export type Role = "admin" | "advisor" | "investor" | null;

type User = {
  username: string;
  role: Exclude<Role, null>;
};

type AuthCtx = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // ŞİMDİLİK MOCK:
  // admin / advisor / investor yazarsan role ona göre geçer.
  async function login(username: string, _password: string) {
    const u = username.trim().toLowerCase();
    const role: User["role"] =
      u === "admin" ? "admin" : u === "advisor" ? "advisor" : "investor";
    setUser({ username, role });
  }

  function logout() {
    setUser(null);
  }

  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
