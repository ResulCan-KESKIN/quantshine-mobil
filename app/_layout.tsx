import { Slot, useRouter, useSegments, type Href } from "expo-router";
import React, { useEffect } from "react";
import { AuthProvider, useAuth, type AppRole } from "../src/auth/AuthContext";

function Gate() {
  const { isLoading, isAuthenticated, role } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  // Rol bazlı varsayılan rota (Href olarak tiplenmiş)
  const DEFAULT_BY_ROLE = {
    admin: "/(admin)/dashboard",
    advisor: "/(advisor)/dashboard",
    investor: "/(investor)/portfolio",
  } as const satisfies Record<AppRole, Href>;

  useEffect(() => {
    if (isLoading) return;

    const seg0 = segments[0] ?? "";
    if (!seg0) return;

    const isOnLogin = seg0 === "login";

    // Auth yoksa → login
    if (!isAuthenticated) {
      if (!isOnLogin) router.replace("/login");
      return;
    }

    // Auth var ama role yoksa bekle
    if (!role) return;

    // Rolün olması gereken group
    const desiredGroup =
      role === "admin"
        ? "(admin)"
        : role === "advisor"
          ? "(advisor)"
          : "(investor)";
    const defaultHref = DEFAULT_BY_ROLE[role];

    // login ekranındayken doğru group dashboard'a at
    if (isOnLogin) {
      router.replace(defaultHref);
      return;
    }

    // yanlış group'taysa -> doğru group dashboard'a at
    if (seg0 !== desiredGroup) {
      router.replace(defaultHref);
    }
  }, [isLoading, isAuthenticated, role, segments]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Gate />
    </AuthProvider>
  );
}
