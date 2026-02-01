import React, { useMemo } from "react";
import { ScrollView, Text } from "react-native";
import { C } from "../../src/theme/colors";
import { DataTable } from "../../src/ui/DataTable";
import { SectionCard } from "../../src/ui/SectionCard";

type InvestorRow = {
  tc: string;
  name: string;
  contact: string;
  lot: number;
  totalInvestment: string;
  pnl: string;
  pnlSign: "pos" | "neg" | "zero";
};

export default function AdvisorInvestors() {
  const columns = useMemo(
    () => [
      "TC",
      "AD SOYAD",
      "MAİL / İLETİŞİM",
      "LOT",
      "TOPLAM YATIRIM",
      "KÂR/ZARAR",
    ],
    [],
  );

  const rows = useMemo<(string | number)[][]>(
    () => [
      [
        "55544433322",
        "Deniz Ak",
        "deniz@mail.com\n0542...",
        850,
        "₺22.000",
        "-1200₺",
      ],
      [
        "11122233344",
        "Murat Yılmaz",
        "murat@mail.com\n0533...",
        1200,
        "₺45.000",
        "+5400₺",
      ],
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
          color: C.text,
          fontSize: 26,
          fontWeight: "900",
          marginBottom: 6,
        }}
      >
        Yatırımcılarım
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
        Sorumluluğunuz altındaki yatırımcıların güncel portföy durumları.
      </Text>

      <SectionCard title="">
        <DataTable
          columns={columns}
          rows={rows}
          minWidth={900}
          colWidths={[160, 160, 220, 90, 160, 130]}
          maxLines={2}
        />
      </SectionCard>
    </ScrollView>
  );
}
