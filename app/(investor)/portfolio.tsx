import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { C } from "../../src/theme/colors";
import { LineChart } from "../../src/ui/LineChart";
import { SectionCard } from "../../src/ui/SectionCard";

type Metric = {
  title: string;
  value: string;
  tone?: "pos" | "neg" | "neutral";
};

function MetricCard({ title, value, tone = "neutral" }: Metric) {
  const color =
    tone === "pos"
      ? (C.green ?? "#22C55E")
      : tone === "neg"
        ? (C.red ?? "#EF4444")
        : (C.text ?? "#fff");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: C.panel ?? "#0B0F1A",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <Text
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: 11,
          fontWeight: "800",
        }}
      >
        {title}
      </Text>
      <Text style={{ color, fontSize: 18, fontWeight: "900", marginTop: 10 }}>
        {value}
      </Text>
    </View>
  );
}

export default function InvestorPortfolio() {
  const [selectedFund, setSelectedFund] = useState("Teknoloji Fonu");

  const funds = useMemo(
    () => ["Teknoloji Fonu", "Altın Fonu", "Sürdürülebilir"],
    [],
  );

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: C.bg }}
      contentContainerStyle={{ padding: 16, paddingBottom: 28 }}
    >
      <Text
        style={{
          color: C.text ?? "#fff",
          fontSize: 26,
          fontWeight: "900",
          marginBottom: 10,
        }}
      >
        Portföyüm
      </Text>

      {/* Fake select */}
      <View
        style={{
          backgroundColor: C.panel ?? "#0B0F1A",
          borderRadius: 14,
          padding: 12,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.06)",
          marginBottom: 14,
        }}
      >
        <Text
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 12,
            fontWeight: "700",
          }}
        >
          İncelemek istediğiniz fonu seçin:
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 10,
          }}
        >
          {funds.map((f) => {
            const active = f === selectedFund;
            return (
              <Pressable
                key={f}
                onPress={() => setSelectedFund(f)}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: active
                    ? "rgba(91,90,243,0.55)"
                    : "rgba(255,255,255,0.10)",
                  backgroundColor: active
                    ? "rgba(91,90,243,0.18)"
                    : "transparent",
                }}
              >
                <Text
                  style={{
                    color: active
                      ? (C.text ?? "#fff")
                      : "rgba(255,255,255,0.75)",
                    fontWeight: "800",
                  }}
                >
                  {f}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Metrics row */}
      <View style={{ flexDirection: "row", gap: 12, marginBottom: 12 }}>
        <MetricCard title="TOPLAM LOT (SEÇİLİ FON)" value="1,200" />
        <MetricCard
          title="KÂR / ZARAR (SEÇİLİ FON)"
          value="+₺5,400"
          tone="pos"
        />
      </View>

      <View style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}>
        <MetricCard title="PORTFÖY BÜYÜKLÜĞÜ" value="₺45,000" />
        <MetricCard
          title="TOPLAM KÂR / ZARAR (GENEL)"
          value="+₺4,200"
          tone="pos"
        />
      </View>

      {/* Chart */}
      <SectionCard title="TEKNOLOJİ FONU DEĞER GRAFİĞİ">
        <LineChart
          labels={["Pzt", "Sal", "Çar", "Per", "Cum"]}
          data={[100, 120, 118, 140, 158]}
        />
      </SectionCard>
    </ScrollView>
  );
}
