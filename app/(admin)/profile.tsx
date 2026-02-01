import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { C } from "../../src/theme/colors";
import { SectionCard } from "../../src/ui/SectionCard";

function Chip({ text }: { text: string }) {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{text}</Text>
    </View>
  );
}

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ padding: 16, paddingBottom: 28 }}
    >
      <SectionCard title="Profil Bilgilerim">
        <View style={styles.profileTop}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AY</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Admin Yönetici</Text>
            <Text style={styles.role}>Sistem Yöneticisi</Text>
          </View>
        </View>

        <View style={styles.hr} />

        <View style={styles.grid}>
          <View style={styles.box}>
            <Text style={styles.k}>E-POSTA ADRESİ</Text>
            <Text style={styles.v}>admin@quantshine.com</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.k}>TC KİMLİK NO</Text>
            <Text style={styles.v}>12345678901</Text>
          </View>
        </View>

        <View style={{ height: 12 }} />

        <Text style={styles.k}>BULUNULAN FONLAR</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 8,
          }}
        >
          <Chip text="Teknoloji Fonu" />
          <Chip text="Altın Fonu" />
          <Chip text="Sürdürülebilirlik Fonu" />
        </View>

        <View style={{ height: 16 }} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.k}>AÇIKLAMA</Text>
          <Pressable>
            <Text style={{ color: C.accent, fontWeight: "900" }}>Düzenle</Text>
          </Pressable>
        </View>

        <View style={styles.textBox}>
          <Text style={{ color: C.sub, lineHeight: 18 }}>
            QuantShine Capital bünyesinde Baş Yönetici olarak fon yönetimi ve
            danışman koordinasyonundan sorumluyum.
          </Text>
        </View>
      </SectionCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg },
  profileTop: { flexDirection: "row", gap: 12, alignItems: "center" },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: C.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: "white", fontWeight: "900", fontSize: 18 },
  name: { color: C.text, fontWeight: "900", fontSize: 16 },
  role: { color: C.sub, marginTop: 2 },

  hr: { height: 1, backgroundColor: C.stroke, marginVertical: 14 },

  grid: { flexDirection: "row", gap: 12 },
  box: {
    flex: 1,
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
  },
  k: { color: C.sub, fontWeight: "900", fontSize: 11, letterSpacing: 0.3 },
  v: { color: C.text, marginTop: 6, fontWeight: "800" },

  chip: {
    backgroundColor: "#151A2D",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  chipText: { color: C.sub, fontWeight: "900", fontSize: 11 },

  textBox: {
    marginTop: 8,
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
  },
});
