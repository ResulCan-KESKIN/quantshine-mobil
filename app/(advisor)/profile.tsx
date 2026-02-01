import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { C } from "../../src/theme/colors";
import { SectionCard } from "../../src/ui/SectionCard";

export default function AdvisorProfile() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: C.bg }}
      contentContainerStyle={{ padding: 16 }}
    >
      <Text
        style={{
          color: C.text,
          fontSize: 26,
          fontWeight: "900",
          marginBottom: 6,
        }}
      >
        Profil Bilgilerim
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
        Kişisel bilgilerinizi ve sistemdeki aktif rollerinizi buradan
        yönetebilirsiniz.
      </Text>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <View style={{ width: 760, maxWidth: "100%" }}>
          <SectionCard title="">
            {/* üst header */}
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 14 }}
            >
              <View
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 23,
                  backgroundColor: C.accent,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "900" }}>AY</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{ color: C.text, fontWeight: "900", fontSize: 16 }}
                >
                  Admin Yönetici
                </Text>
                <Text style={{ color: C.accent, fontSize: 12, marginTop: 2 }}>
                  Sistem Yöneticisi
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 1,
                backgroundColor: "rgba(255,255,255,0.06)",
                marginVertical: 14,
              }}
            />

            {/* bilgiler */}
            <View style={{ flexDirection: "row", gap: 18 }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 11,
                    fontWeight: "800",
                  }}
                >
                  E-POSTA ADRESİ
                </Text>
                <Text style={{ color: C.text, marginTop: 6 }}>
                  admin@quantshine.com
                </Text>
              </View>
              <View style={{ width: 220 }}>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 11,
                    fontWeight: "800",
                  }}
                >
                  TC KİMLİK NO
                </Text>
                <Text style={{ color: C.text, marginTop: 6 }}>12345678901</Text>
              </View>
            </View>

            <Text
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 11,
                fontWeight: "800",
                marginTop: 16,
              }}
            >
              BULUNULAN FONLAR
            </Text>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 10,
              }}
            >
              {["Teknoloji Fonu", "Altın Fonu", "Sürdürülebilirlik Fonu"].map(
                (x) => (
                  <View
                    key={x}
                    style={{
                      backgroundColor: "rgba(91,90,243,0.25)",
                      borderColor: "rgba(91,90,243,0.35)",
                      borderWidth: 1,
                      paddingVertical: 6,
                      paddingHorizontal: 10,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{ color: "rgba(255,255,255,0.9)", fontSize: 12 }}
                    >
                      {x}
                    </Text>
                  </View>
                ),
              )}
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 11,
                  fontWeight: "800",
                  flex: 1,
                }}
              >
                AÇIKLAMA
              </Text>
              <Pressable>
                <Text style={{ color: C.accent, fontWeight: "800" }}>
                  ✎ Düzenle
                </Text>
              </Pressable>
            </View>

            <View
              style={{
                marginTop: 10,
                borderWidth: 1,
                borderColor: C.stroke,
                borderRadius: 12,
                backgroundColor: "rgba(255,255,255,0.02)",
                padding: 12,
                minHeight: 80,
              }}
            >
              <Text style={{ color: "rgba(255,255,255,0.75)", lineHeight: 18 }}>
                QuantShine Capital bünyesinde Baş Yönetici olarak fon yönetimi
                ve danışman koordinasyonundan sorumluyum.
              </Text>
            </View>
          </SectionCard>
        </View>
      </View>
    </ScrollView>
  );
}
