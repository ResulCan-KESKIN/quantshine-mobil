import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useAuth } from "../../src/auth/AuthContext";
import { C } from "../../src/theme/colors";

function AdvisorDrawerContent(drawerProps: any) {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <DrawerContentScrollView
      {...drawerProps}
      contentContainerStyle={{
        paddingTop: 0,
        flexGrow: 1,
        backgroundColor: C.sidebarBg ?? "#0b1220",
      }}
    >
      <View style={{ paddingHorizontal: 16, paddingVertical: 18 }}>
        <Text
          style={{
            color: C.primary ?? C.accent,
            fontSize: 18,
            fontWeight: "900",
          }}
        >
          QS Advisor
        </Text>
        <Text
          style={{
            color: "rgba(255,255,255,0.45)",
            marginTop: 4,
            fontSize: 12,
          }}
        >
          DANIŞMAN PANELİ
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "rgba(255,255,255,0.06)",
            marginTop: 16,
          }}
        />
      </View>

      <DrawerItemList {...drawerProps} />

      <View style={{ flex: 1 }} />

      <Pressable
        onPress={async () => {
          await logout();
          router.replace("/login");
        }}
        style={{
          marginTop: 14,
          marginHorizontal: 12,
          marginBottom: 16,
          paddingVertical: 12,
          paddingHorizontal: 12,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.10)",
          backgroundColor: "rgba(255, 90, 90, 0.10)",
        }}
      >
        <Text style={{ color: "#ff5a5a", fontWeight: "900" }}>Çıkış Yap</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}

export default function AdvisorLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerLeft: () => <DrawerToggleButton tintColor={C.text} />,
        headerStyle: { backgroundColor: C.panel },
        headerTintColor: C.text,
        drawerStyle: { backgroundColor: C.panel, width: 280 },
        drawerInactiveTintColor: C.sub,
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: C.accent,
      }}
      drawerContent={(props) => <AdvisorDrawerContent {...props} />}
    >
      <Drawer.Screen name="dashboard" options={{ title: "Ana Sayfa" }} />
      <Drawer.Screen name="investors" options={{ title: "Yatırımcılar" }} />
      <Drawer.Screen name="trading" options={{ title: "İşlem Sayfası" }} />
      <Drawer.Screen name="reporting" options={{ title: "Raporlama" }} />
      <Drawer.Screen name="profile" options={{ title: "Profil" }} />
    </Drawer>
  );
}
