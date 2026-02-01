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

function InvestorDrawerContent(drawerProps: any) {
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
          QS Investor
        </Text>
        <Text
          style={{
            color: "rgba(255,255,255,0.45)",
            marginTop: 4,
            fontSize: 12,
          }}
        >
          YATIRIMCI PANELİ
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

export default function InvestorLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerTintColor: C.text,
        headerStyle: { backgroundColor: C.panel },
        headerTitle: "Quant&Shine",
        headerLeft: () => <DrawerToggleButton tintColor={C.text} />,
        drawerStyle: { backgroundColor: C.panel, width: 280 },
        drawerInactiveTintColor: C.sub,
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: C.accent,
      }}
      drawerContent={(props) => <InvestorDrawerContent {...props} />}
    >
      <Drawer.Screen name="portfolio" options={{ title: "Portföyüm" }} />
      <Drawer.Screen name="history" options={{ title: "Yatırım Geçmişim" }} />
      <Drawer.Screen name="reports" options={{ title: "Haftalık Rapor" }} />
      <Drawer.Screen
        name="advisor-profile"
        options={{ title: "Danışman Profili" }}
      />
    </Drawer>
  );
}
