import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { C } from "../../src/theme/colors";
import { FundList } from "../../src/ui/FundList";
import { LineChart } from "../../src/ui/LineChart";
import { MetricCard } from "../../src/ui/MetricCard";
import { SectionCard } from "../../src/ui/SectionCard";

export default function Dashboard() {
  const [chartW, setChartW] = useState(320);

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ padding: 16, paddingBottom: 30 }}
    >
      <View style={styles.metricsRow}>
        <MetricCard title="ŞİRKET FON BÜYÜKLÜĞÜ" value="₺2.450.000" />
        <MetricCard title="ŞİRKET KÂR/ZARAR" value="+₺120.000" tone="green" />
      </View>

      <View style={[styles.metricsRow, { marginTop: 12 }]}>
        <MetricCard title="FON BÜYÜKLÜĞÜ" value="₺850.000" />
        <MetricCard title="FON KÂR/ZARAR" value="-₺12.500" tone="red" />
      </View>

      <View style={{ height: 14 }} />

      <SectionCard title="Fon Fiyatı Anlık Değişim">
        <View
          onLayout={(e) => {
            const w = Math.floor(e.nativeEvent.layout.width);
            if (w > 0) setChartW(w);
          }}
        >
          <LineChart
            width={chartW}
            height={170}
            maxXLabels={5}
            data={[95, 110, 102, 130, 122, 150, 142, 165]}
            labels={[
              "09:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
            ]}
          />
        </View>
      </SectionCard>

      <View style={{ height: 14 }} />

      <SectionCard title="Fon Detayları">
        <FundList
          items={[
            {
              name: "Teknoloji",
              pnl: "+12%",
              advisors: 4,
              investors: 120,
              value: "₺150.50",
              lot: "5000",
            },
            {
              name: "Altın",
              pnl: "-2.5%",
              advisors: 2,
              investors: 85,
              value: "₺210.20",
              lot: "3200",
            },
            {
              name: "Sürdürülebilir",
              pnl: "+5.8%",
              advisors: 3,
              investors: 45,
              value: "₺95.00",
              lot: "1500",
            },
          ]}
        />
      </SectionCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg },
  metricsRow: { flexDirection: "row", gap: 12 },
});
