import React, { useMemo } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { C } from "../../src/theme/colors";
import { SectionCard } from "../../src/ui/SectionCard";

type Report = {
  id: string;
  date: string;
  title: string;
  summary: string;
  author: string;
  badge: string;
};

export default function InvestorReports() {
  const reports: Report[] = useMemo(
    () => [
      {
        id: "r1",
        date: "27 Ocak 2024",
        title: "Teknoloji Fonu Haftalık Analizi",
        summary:
          "Bu hafta teknoloji hisselerinde beklenen direnç seviyeleri aşıldı. Portföydeki yapay zeka odaklı şirketler %5 büyüme kaydetti.",
        author: "Can Yaman",
        badge: "PDF HAZIR",
      },
      {
        id: "r2",
        date: "20 Ocak 2024",
        title: "Ocak Ayı 3. Hafta Değerlendirmesi",
        summary:
          "Yazılım sektöründeki nakit akışı optimizasyonu tamamlandı. Önümüzdeki hafta yan iletken stokları takip edilecek.",
        author: "Can Yaman",
        badge: "PDF HAZIR",
      },
    ],
    [],
  );

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: C.bg }}
      contentContainerStyle={{ padding: 16 }}
    >
      <Text
        style={{
          color: C.text ?? "#fff",
          fontSize: 26,
          fontWeight: "900",
          marginBottom: 6,
        }}
      >
        Haftalık Raporlar
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
        Danışmanlarınız tarafından size özel hazırlanan analizler.
      </Text>

      <View style={{ gap: 12 }}>
        {reports.map((r) => (
          <SectionCard key={r.id} title="">
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text
                style={{ color: "rgba(255,255,255,0.6)", fontWeight: "800" }}
              >
                {r.date}
              </Text>
              <View
                style={{
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  borderRadius: 999,
                  backgroundColor: "rgba(91,90,243,0.18)",
                  borderWidth: 1,
                  borderColor: "rgba(91,90,243,0.35)",
                }}
              >
                <Text
                  style={{
                    color: C.accent ?? "#5B5AF3",
                    fontWeight: "900",
                    fontSize: 11,
                  }}
                >
                  {r.badge}
                </Text>
              </View>
            </View>

            <Text
              style={{
                color: C.text ?? "#fff",
                fontWeight: "900",
                fontSize: 16,
              }}
            >
              {r.title}
            </Text>
            <Text
              style={{
                color: "rgba(255,255,255,0.65)",
                marginTop: 8,
                lineHeight: 19,
              }}
            >
              {r.summary}
            </Text>

            <View
              style={{
                height: 1,
                backgroundColor: "rgba(255,255,255,0.06)",
                marginVertical: 14,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "rgba(255,255,255,0.7)", fontWeight: "800" }}
              >
                {r.author}
              </Text>

              <Pressable
                onPress={() => console.log("open report", r.id)}
                style={({ pressed }) => ({
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  borderRadius: 12,
                  backgroundColor: pressed
                    ? "rgba(91,90,243,0.28)"
                    : "rgba(91,90,243,0.18)",
                  borderWidth: 1,
                  borderColor: "rgba(91,90,243,0.35)",
                })}
              >
                <Text style={{ color: C.text ?? "#fff", fontWeight: "900" }}>
                  Raporu Görüntüle
                </Text>
              </Pressable>
            </View>
          </SectionCard>
        ))}
      </View>
    </ScrollView>
  );
}
