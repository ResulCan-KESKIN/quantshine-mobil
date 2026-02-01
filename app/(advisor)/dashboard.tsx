import React from "react";
import { ScrollView, Text, View } from "react-native";
import { C as Colors } from "../../src/theme/colors"; // ✅ isim çakışmasını sıfırladık
import { FundList } from "../../src/ui/FundList";
import { LineChart } from "../../src/ui/LineChart";
import { MetricCard } from "../../src/ui/MetricCard";
import { SectionCard } from "../../src/ui/SectionCard";

export default function AdvisorDashboard() {
  // ✅ burada Colors kesin defined
  // İstersen 1 kere logla:
  // console.log("ADVISOR DASH COLORS", Colors);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.bg }}
      contentContainerStyle={{ padding: 16 }}
    >
      <Text
        style={{
          color: Colors.text,
          fontSize: 24,
          fontWeight: "900",
          marginBottom: 12,
        }}
      >
        ANA SAYFA
      </Text>

      <View style={{ gap: 12 }}>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={{ flex: 1 }}>
            <MetricCard title="SORUMLU FON BÜYÜKLÜĞÜ" value="₺1.120.000" />
          </View>
          <View style={{ flex: 1 }}>
            <MetricCard title="FON KÂR/ZARAR" value="+₺42.500" />
          </View>
        </View>

        <SectionCard title="Fon Fiyatı Anlık Değişim">
          <LineChart
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
            data={[100, 120, 105, 145, 130, 168, 155, 185]}
          />
        </SectionCard>

        <SectionCard title="Yatırımcı Fonları">
          <FundList
            items={[
              {
                name: "Teknoloji",
                pnl: "+12%",
                advisors: 1,
                investors: 120,
                value: "₺150.50",
                lot: "5000",
              },
              {
                name: "Altın",
                pnl: "-2.5%",
                advisors: 1,
                investors: 85,
                value: "₺210.20",
                lot: "3200",
              },
              {
                name: "Sürdürülebilir",
                pnl: "+5.8%",
                advisors: 1,
                investors: 45,
                value: "₺95.00",
                lot: "1500",
              },
            ]}
          />
        </SectionCard>
      </View>
    </ScrollView>
  );
}
