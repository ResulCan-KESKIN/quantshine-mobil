import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { C } from "../src/theme/colors";

const NEWS = [
  { id: "1", title: "Fon performans raporu yayınlandı", date: "Bugün" },
  { id: "2", title: "Yeni danışman atamaları tamamlandı", date: "Dün" },
  { id: "3", title: "Portföy optimizasyonu güncellemesi", date: "Geçen hafta" },
];

export default function Landing() {
  return (
    <View style={styles.page}>
      <View style={styles.topBar}>
        <Text style={styles.brand}>Quantshine Capital</Text>

        <Pressable
          style={styles.loginBtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.loginBtnText}>Giriş Yap</Text>
        </Pressable>
      </View>

      <View style={styles.hero}>
        <Text style={styles.h1}>QS Admin / Yatırım Ekosistemi</Text>
        <Text style={styles.p}>
          Fonlar • Danışmanlar • Yatırımcılar • İşlemler • Raporlama
        </Text>

        <View style={styles.logoBox}>
          <Text style={styles.logoText}>QS</Text>
          <Text style={styles.logoSub}>Quantshine</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Haberler</Text>
      <FlatList
        data={NEWS}
        keyExtractor={(x) => x.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View style={styles.newsCard}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDate}>{item.date}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg, padding: 16, paddingTop: 48 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: { color: C.text, fontSize: 16, fontWeight: "800" },
  loginBtn: {
    backgroundColor: C.accent,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  loginBtnText: { color: "white", fontWeight: "800" },

  hero: {
    marginTop: 18,
    backgroundColor: C.panel,
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
  },
  h1: { color: C.text, fontSize: 20, fontWeight: "900" },
  p: { color: C.sub, marginTop: 6, lineHeight: 18 },

  logoBox: {
    marginTop: 14,
    alignSelf: "flex-start",
    backgroundColor: "#0A0E1A",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: C.stroke,
  },
  logoText: { color: C.accent, fontSize: 26, fontWeight: "900" },
  logoSub: { color: C.sub, marginTop: 2, fontWeight: "700" },

  sectionTitle: {
    color: C.text,
    fontSize: 16,
    fontWeight: "900",
    marginTop: 16,
    marginBottom: 10,
  },
  newsCard: {
    backgroundColor: C.panel,
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
  },
  newsTitle: { color: C.text, fontWeight: "800" },
  newsDate: { color: C.muted, marginTop: 6, fontSize: 12 },
});
