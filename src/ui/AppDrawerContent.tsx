import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useAuth } from "../auth/AuthContext";
import { C } from "../theme/colors";

type Props = {
  title: string;
  subtitle: string;
  // Drawer props (react-navigation)
  drawerProps: any;
};

export default function AppDrawerContent({
  title,
  subtitle,
  drawerProps,
}: Props) {
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
      {/* Header */}
      <View style={{ paddingHorizontal: 16, paddingVertical: 18 }}>
        <Text
          style={{
            color: C.primary ?? C.accent,
            fontSize: 18,
            fontWeight: "900",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: "rgba(255,255,255,0.45)",
            marginTop: 4,
            fontSize: 12,
          }}
        >
          {subtitle}
        </Text>

        <View
          style={{
            height: 1,
            backgroundColor: "rgba(255,255,255,0.06)",
            marginTop: 16,
          }}
        />
      </View>

      {/* Default menu items */}
      <DrawerItemList {...drawerProps} />

      {/* Spacer to push logout to bottom */}
      <View style={{ flex: 1 }} />

      {/* Logout button (red, bottom) */}
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
