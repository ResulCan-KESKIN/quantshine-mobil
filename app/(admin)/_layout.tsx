import { Drawer } from "expo-router/drawer";
import React from "react";
import { C } from "../../src/theme/colors";

export default function AdminLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: C.panel },
        headerTintColor: C.text,
        drawerStyle: { backgroundColor: C.panel, width: 280 },
        drawerInactiveTintColor: C.sub,
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: C.accent,
      }}
    >
      <Drawer.Screen name="dashboard" options={{ title: "Ana Sayfa" }} />
      <Drawer.Screen name="advisors" options={{ title: "Danışmanlar" }} />
      <Drawer.Screen name="investors" options={{ title: "Yatırımcılar" }} />
      <Drawer.Screen name="requests" options={{ title: "İstekler" }} />
      <Drawer.Screen name="trading" options={{ title: "İşlem Sayfası" }} />
      <Drawer.Screen name="funds" options={{ title: "Fonlar" }} />
      <Drawer.Screen name="history" options={{ title: "İşlem Geçmişi" }} />
      <Drawer.Screen name="reporting" options={{ title: "Raporlama" }} />
      <Drawer.Screen name="profile" options={{ title: "Profil" }} />
    </Drawer>
  );
}
