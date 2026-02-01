import React, { useMemo } from "react";
import { ScrollView, Text } from "react-native";
import { C } from "../../src/theme/colors";
import { DataTable } from "../../src/ui/DataTable";
import { SectionCard } from "../../src/ui/SectionCard";

type HistoryRow = {
  date: string;
  fund: string;
  type: "ALIS" | "SATIS";
  lot: number;
  amount: string;
  oldValue: string;
  currentValue: string;
};

export default function InvestorHistory() {
  // Kolon tanımları (label ve width)
  const columnDefs = useMemo(
    () => [
      { key: "date", label: "TARİH", width: 170 },
      { key: "fund", label: "FON", width: 160 },
      { key: "type", label: "İŞLEM", width: 110 },
      { key: "lot", label: "LOT", width: 90 },
      { key: "amount", label: "TUTAR", width: 110 },
      { key: "oldValue", label: "O ANKİ DEĞER", width: 140 },
      { key: "currentValue", label: "ŞU ANKİ DEĞER", width: 140 },
    ],
    [],
  );

  const data: HistoryRow[] = useMemo(
    () => [
      {
        date: "2024-01-15 10:30",
        fund: "Teknoloji Fonu",
        type: "ALIS",
        lot: 150,
        amount: "₺4.500",
        oldValue: "₺30.00",
        currentValue: "₺38.50",
      },
      {
        date: "2024-01-20 14:15",
        fund: "Altın Fonu",
        type: "SATIS",
        lot: 50,
        amount: "₺2.200",
        oldValue: "₺44.00",
        currentValue: "₺42.10",
      },
      {
        date: "2024-02-01 09:45",
        fund: "Teknoloji Fonu",
        type: "ALIS",
        lot: 100,
        amount: "₺3.800",
        oldValue: "₺38.00",
        currentValue: "₺38.50",
      },
    ],
    [],
  );

  // DataTable için: columns (başlıklar), rows (değerler), colWidths (px)
  const columns = useMemo(() => columnDefs.map((c) => c.label), [columnDefs]);
  const colWidths = useMemo(() => columnDefs.map((c) => c.width), [columnDefs]);
  const rows = useMemo(
    () =>
      data.map((r) => [
        r.date,
        r.fund,
        r.type,
        r.lot,
        r.amount,
        r.oldValue,
        r.currentValue,
      ]),
    [data],
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
        Yatırım Geçmişim
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
        Gerçekleştirdiğiniz tüm fon alım ve satım işlemlerinin detaylı dökümü.
      </Text>

      <SectionCard title="">
        <DataTable
          columns={columns}
          rows={rows}
          minWidth={colWidths.reduce((sum, w) => sum + (w ?? 120), 0)}
          colWidths={colWidths}
          maxLines={1}
        />
      </SectionCard>
    </ScrollView>
  );
}
