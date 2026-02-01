import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, Switch, Text, TextInput, View } from "react-native";
import { useAuth } from "../src/auth/AuthContext";
import { C } from "../src/theme/colors";

export default function LoginScreen() {
  const router = useRouter();
  const {
    login,
    isLoading,
    rememberMe,
    rememberedUsername,
    setRememberMe,
    setRememberedUsername,
  } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && rememberMe && rememberedUsername) {
      setUsername(rememberedUsername);
    }
    setPassword("");
  }, [isLoading, rememberMe, rememberedUsername]);

  async function onSubmit() {
    console.log("C IS", C);
    if (loading) return;
    setLoading(true);
    setErr(null);

    const res = await login(username.trim(), password);

    if (!res.ok) {
      setErr(res.error);
      setLoading(false);
      return;
    }

    // ❗ ASLA /(admin) gibi route yazma
    router.replace("/");
    setLoading(false);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: C.bg,
        padding: 16,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: C.text,
          fontSize: 26,
          fontWeight: "900",
          marginBottom: 18,
        }}
      >
        GİRİŞ
      </Text>

      <TextInput
        value={username}
        onChangeText={(t) => {
          setUsername(t);
          setRememberedUsername(t);
        }}
        placeholder="kullanıcı adı"
        autoCapitalize="none"
        style={{
          backgroundColor: C.panel,
          color: C.text,
          borderRadius: 14,
          padding: 12,
          marginBottom: 10,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: C.text }}>Beni hatırla</Text>
        <Switch value={rememberMe} onValueChange={setRememberMe} />
      </View>

      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="şifre"
        style={{
          backgroundColor: C.panel,
          color: C.text,
          borderRadius: 14,
          padding: 12,
          marginBottom: 10,
        }}
      />

      {err && <Text style={{ color: "red", marginBottom: 8 }}>{err}</Text>}

      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: C.primary,
          padding: 14,
          borderRadius: 14,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "900" }}>
          {loading ? "GİRİŞ..." : "GİR"}
        </Text>
      </Pressable>
    </View>
  );
}
