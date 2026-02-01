import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { C } from "../../src/theme/colors";
import { HorizontalTable } from "../../src/ui/HorizontalTable";
import { SectionCard } from "../../src/ui/SectionCard";

type HistoryRow = {
  tc: string;
  name: string;
  type: "ALIM" | "SATIM";
  amount: string; // ₺
  lot: string; // adet
  buyPrice: string; // ₺
  nowPrice: string; // ₺
  date: string; // tarih-saat
};

const DATA: HistoryRow[] = [
  {
    tc: "12345678901",
    name: "Murat Güneş",
    type: "ALIM",
    amount: "₺15,000",
    lot: "100",
    buyPrice: "₺150.00",
    nowPrice: "₺165.20",
    date: "2026-02-01 10:12",
  },
  {
    tc: "98765432109",
    name: "Selin Yılmaz",
    type: "SATIM",
    amount: "₺8,400",
    lot: "40",
    buyPrice: "₺210.00",
    nowPrice: "₺208.50",
    date: "2026-02-01 09:55",
  },
  {
    tc: "55566677788",
    name: "Can Demir",
    type: "ALIM",
    amount: "₺2,850",
    lot: "30",
    buyPrice: "₺95.00",
    nowPrice: "₺98.10",
    date: "2026-01-31 16:40",
  },
  {
    tc: "11122233344",
    name: "Ahmet Kaya",
    type: "ALIM",
    amount: "₺25,000",
    lot: "50",
    buyPrice: "₺500.00",
    nowPrice: "₺480.00",
    date: "2026-01-31 14:05",
  },
];

type ColKey =
  | "tc"
  | "name"
  | "type"
  | "amount"
  | "lot"
  | "buyPrice"
  | "nowPrice"
  | "date";

const COLUMNS: { key: ColKey; title: string; minWidth: number }[] = [
  { key: "tc", title: "TC", minWidth: 140 },
  { key: "name", title: "Ad Soyad", minWidth: 170 },
  { key: "type", title: "Tip", minWidth: 90 },
  { key: "amount", title: "Tutar", minWidth: 120 },
  { key: "lot", title: "Lot", minWidth: 80 },
  { key: "buyPrice", title: "İşlem Değ.", minWidth: 120 },
  { key: "nowPrice", title: "Şu an", minWidth: 110 },
  { key: "date", title: "Tarih", minWidth: 150 },
];

export default function HistoryScreen() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim();
    if (!s) return DATA;
    // TC'ye göre filtre (istersen isim de ekleriz)
    return DATA.filter((x) => x.tc.includes(s));
  }, [q]);

  const minTableWidth = COLUMNS.reduce((sum, c) => sum + c.minWidth, 0) + 40;

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ padding: 16, paddingBottom: 28 }}
    >
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder="TC Kimlik No ile ara..."
        placeholderTextColor={C.muted}
        style={styles.search}
      />

      <View style={{ height: 12 }} />

      <SectionCard title="İşlem Geçmişi">
        <HorizontalTable minWidth={minTableWidth}>
          {/* HEAD */}
          <View style={styles.tableHead}>
            {COLUMNS.map((col) => (
              <Text
                key={col.key}
                style={[styles.hcell, { minWidth: col.minWidth }]}
                numberOfLines={1}
              >
                {col.title}
              </Text>
            ))}
          </View>

          {/* ROWS */}
          {filtered.map((r, idx) => {
            const pnlSign = r.nowPrice < r.buyPrice ? "-" : "+"; // string kıyas; aşağıda daha iyi yapacağız
            // Basit renk: ALIM/SATIM ya da fiyat karşılaştırması.
            const typeColor = r.type === "ALIM" ? C.green : C.red;

            return (
              <View key={`${r.tc}-${idx}`} style={styles.row}>
                <Text
                  style={[styles.cell, { minWidth: 140 }]}
                  numberOfLines={1}
                >
                  {r.tc}
                </Text>

                <Text
                  style={[styles.cell, { minWidth: 170, fontWeight: "900" }]}
                  numberOfLines={1}
                >
                  {r.name}
                </Text>

                <View
                  style={[
                    styles.typePill,
                    { minWidth: 90, borderColor: typeColor },
                  ]}
                >
                  <Text
                    style={[styles.typeText, { color: typeColor }]}
                    numberOfLines={1}
                  >
                    {r.type}
                  </Text>
                </View>

                <Text
                  style={[styles.cell, { minWidth: 120 }]}
                  numberOfLines={1}
                >
                  {r.amount}
                </Text>

                <Text style={[styles.cell, { minWidth: 80 }]} numberOfLines={1}>
                  {r.lot}
                </Text>

                <Text
                  style={[styles.cell, { minWidth: 120 }]}
                  numberOfLines={1}
                >
                  {r.buyPrice}
                </Text>

                <Text
                  style={[styles.cell, { minWidth: 110 }]}
                  numberOfLines={1}
                >
                  {r.nowPrice}
                </Text>

                <Text
                  style={[styles.cell, { minWidth: 150, color: C.sub }]}
                  numberOfLines={1}
                >
                  {r.date}
                </Text>
              </View>
            );
          })}
        </HorizontalTable>
      </SectionCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg },

  search: {
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: C.text,
  },

  tableHead: {
    flexDirection: "row",
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  hcell: {
    color: C.accent,
    fontSize: 10,
    fontWeight: "900",
    marginRight: 8,
  },

  row: {
    marginTop: 10,
    backgroundColor: C.panel,
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cell: {
    color: C.text,
    fontSize: 12,
    marginRight: 8,
  },

  typePill: {
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 8,
    backgroundColor: "#0A0E1A",
    alignItems: "center",
    justifyContent: "center",
  },
  typeText: {
    fontWeight: "900",
    fontSize: 11,
  },
});
