import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { C } from "../../src/theme/colors";
import { HorizontalTable } from "../../src/ui/HorizontalTable";
import { SectionCard } from "../../src/ui/SectionCard";

type FundRow = {
  name: string;
  value: string; // ₺
  updatedAt: string; // tarih/saat
  advisorCount: string; // sayı
  investorCount: string; // sayı
};

const FUNDS: FundRow[] = [
  {
    name: "Teknoloji Fonu",
    value: "₺150.50",
    updatedAt: "2026-02-01 10:30",
    advisorCount: "4",
    investorCount: "120",
  },
  {
    name: "Altın Fonu",
    value: "₺210.20",
    updatedAt: "2026-02-01 10:30",
    advisorCount: "2",
    investorCount: "85",
  },
  {
    name: "Sürdürülebilirlik Fonu",
    value: "₺95.00",
    updatedAt: "2026-02-01 10:30",
    advisorCount: "3",
    investorCount: "45",
  },
];

type ColKey =
  | "fund"
  | "value"
  | "updatedAt"
  | "advisor"
  | "investor"
  | "action";

const COLUMNS: { key: ColKey; title: string; minWidth: number }[] = [
  { key: "fund", title: "Fon", minWidth: 220 },
  { key: "value", title: "Güncel", minWidth: 110 },
  { key: "updatedAt", title: "Son Güncelleme", minWidth: 170 },
  { key: "advisor", title: "Danışman", minWidth: 110 },
  { key: "investor", title: "Yatırımcı", minWidth: 110 },
  { key: "action", title: "İşlem", minWidth: 200 },
];

export default function FundsScreen() {
  const minTableWidth = COLUMNS.reduce((sum, c) => sum + c.minWidth, 0) + 40;

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ padding: 16, paddingBottom: 28 }}
    >
      <SectionCard title="Fon Yönetimi">
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
          {FUNDS.map((f) => (
            <View key={f.name} style={styles.row}>
              <Text
                style={[styles.cell, { minWidth: 220, fontWeight: "900" }]}
                numberOfLines={1}
              >
                {f.name}
              </Text>

              <Text style={[styles.cell, { minWidth: 110 }]} numberOfLines={1}>
                {f.value}
              </Text>

              <Text
                style={[styles.cell, { minWidth: 170, color: C.sub }]}
                numberOfLines={1}
              >
                {f.updatedAt}
              </Text>

              <View style={[styles.countPill, { minWidth: 110 }]}>
                <Text style={styles.countText} numberOfLines={1}>
                  {f.advisorCount}
                </Text>
              </View>

              <View style={[styles.countPill, { minWidth: 110 }]}>
                <Text style={styles.countText} numberOfLines={1}>
                  {f.investorCount}
                </Text>
              </View>

              <Pressable style={[styles.btn, { minWidth: 200 }]}>
                <Text style={styles.btnText} numberOfLines={1}>
                  Danışman Transferi
                </Text>
              </Pressable>
            </View>
          ))}
        </HorizontalTable>
      </SectionCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg },

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
  cell: { color: C.text, fontSize: 12, marginRight: 8 },

  countPill: {
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  countText: { color: C.text, fontWeight: "900" },

  btn: {
    backgroundColor: C.accent,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  btnText: { color: "white", fontWeight: "900", fontSize: 12 },
});
