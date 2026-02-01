import { router } from "expo-router";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { useAuth } from "../src/auth/AuthContext";
import { C } from "../src/theme/colors";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin() {
    await login(username, password);

    // Mock role routing:
    const u = username.trim().toLowerCase();
    const role =
      u === "admin" ? "admin" : u === "advisor" ? "advisor" : "investor";

    if (role === "admin") router.replace("/(admin)/dashboard");
    else router.replace("/"); // şimdilik diğer rolleri sonra yaparız
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.page}
    >
      <Text style={styles.h1}>Giriş Yap</Text>
      <Text style={styles.sub}>Kullanıcı adın ve şifren ile devam et.</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Kullanıcı Adı</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="örn: admin"
          placeholderTextColor={C.muted}
          style={styles.input}
          autoCapitalize="none"
        />

        <Text style={[styles.label, { marginTop: 12 }]}>Şifre</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          placeholderTextColor={C.muted}
          style={styles.input}
          secureTextEntry
        />

        <Pressable style={styles.btn} onPress={onLogin}>
          <Text style={styles.btnText}>Giriş Yap</Text>
        </Pressable>

        <Text style={styles.tip}>
          Test: kullanıcı adı{" "}
          <Text style={{ color: C.accent, fontWeight: "900" }}>admin</Text> yaz.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg, padding: 16, paddingTop: 64 },
  h1: { color: C.text, fontSize: 26, fontWeight: "900" },
  sub: { color: C.sub, marginTop: 6 },

  card: {
    marginTop: 18,
    backgroundColor: C.panel,
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
  },
  label: { color: C.sub, fontWeight: "800", marginBottom: 6 },
  input: {
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: C.text,
  },
  btn: {
    marginTop: 16,
    backgroundColor: C.accent,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  btnText: { color: "white", fontWeight: "900" },
  tip: { color: C.muted, marginTop: 12, fontSize: 12 },
});
