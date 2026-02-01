import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { C } from "../../src/theme/colors";
import { HorizontalTable } from "../../src/ui/HorizontalTable";
import { SectionCard } from "../../src/ui/SectionCard";

type InvestorRow = {
  tc: string;
  name: string;
  contact: string;
  lot: string;
  total: string;
  pnl: string;
  advisor: string;
};

const DATA: InvestorRow[] = [
  {
    tc: "11122233344",
    name: "Can Öztürk",
    contact: "can@mail.com",
    lot: "1200",
    total: "₺45.000",
    pnl: "+₺5400",
    advisor: "Murat Güneş",
  },
  {
    tc: "55544433322",
    name: "Deniz Ak",
    contact: "deniz@mail.com",
    lot: "850",
    total: "₺22.000",
    pnl: "-₺1200",
    advisor: "Selin Yılmaz",
  },
];

type ColumnKey =
  | "tc"
  | "name"
  | "contact"
  | "lot"
  | "total"
  | "pnl"
  | "advisor"
  | "action";

const COLUMNS: { key: ColumnKey; title: string; minWidth: number }[] = [
  { key: "tc", title: "TC", minWidth: 140 },
  { key: "name", title: "Ad Soyad", minWidth: 160 },
  { key: "contact", title: "Mail/İletişim", minWidth: 200 },
  { key: "lot", title: "Lot", minWidth: 80 },
  { key: "total", title: "Toplam", minWidth: 120 },
  { key: "pnl", title: "K/Z", minWidth: 100 },
  { key: "advisor", title: "Danışman", minWidth: 170 },
  { key: "action", title: "İşlem", minWidth: 130 },
];

function TabBtn({
  active,
  title,
  onPress,
}: {
  active: boolean;
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.tab, active && styles.tabActive]}
    >
      <Text style={[styles.tabText, active && styles.tabTextActive]}>
        {title}
      </Text>
    </Pressable>
  );
}

export default function InvestorsScreen() {
  const [tab, setTab] = useState<"investors" | "mine">("investors");

  // şimdilik aynı data; sonra tab’a göre filtrelersin
  const rows = DATA;

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ padding: 16, paddingBottom: 28 }}
    >
      <View style={{ flexDirection: "row", gap: 10, marginBottom: 12 }}>
        <TabBtn
          title="Yatırımcılar"
          active={tab === "investors"}
          onPress={() => setTab("investors")}
        />
        <TabBtn
          title="Yatırımcılarım"
          active={tab === "mine"}
          onPress={() => setTab("mine")}
        />
      </View>

      <SectionCard title="Yatırımcı Yönetimi">
        <HorizontalTable
          minWidth={COLUMNS.reduce((sum, c) => sum + c.minWidth, 0) + 40}
        >
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
          {rows.map((r) => (
            <View key={r.tc} style={styles.row}>
              <Text style={[styles.cell, { minWidth: 140 }]} numberOfLines={1}>
                {r.tc}
              </Text>

              <Text
                style={[styles.cell, { minWidth: 160, fontWeight: "900" }]}
                numberOfLines={1}
              >
                {r.name}
              </Text>

              <Text style={[styles.cell, { minWidth: 200 }]} numberOfLines={1}>
                {r.contact}
              </Text>

              <Text style={[styles.cell, { minWidth: 80 }]} numberOfLines={1}>
                {r.lot}
              </Text>

              <Text style={[styles.cell, { minWidth: 120 }]} numberOfLines={1}>
                {r.total}
              </Text>

              <Text
                style={[
                  styles.cell,
                  {
                    minWidth: 100,
                    color: r.pnl.startsWith("-") ? C.red : C.green,
                    fontWeight: "900",
                  },
                ]}
                numberOfLines={1}
              >
                {r.pnl}
              </Text>

              <View style={[styles.badge, { minWidth: 170 }]}>
                <Text style={styles.badgeText} numberOfLines={1}>
                  {r.advisor}
                </Text>
              </View>

              <Pressable style={[styles.btn, { minWidth: 130 }]}>
                <Text style={styles.btnText} numberOfLines={1}>
                  Transfer Et
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

  tab: {
    backgroundColor: C.panel,
    borderColor: C.stroke,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  tabActive: { backgroundColor: C.accent, borderColor: C.accent },
  tabText: { color: C.sub, fontWeight: "900" },
  tabTextActive: { color: "white" },

  tableHead: {
    flexDirection: "row",
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  // flex kullanmıyoruz; minWidth ile kolon belirliyoruz
  hcell: { color: C.accent, fontSize: 10, fontWeight: "900", marginRight: 8 },

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

  badge: {
    backgroundColor: "#0B3B2E",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  badgeText: { color: "#B7F7D0", fontWeight: "900", fontSize: 11 },

  btn: {
    backgroundColor: C.accent,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  btnText: { color: "white", fontWeight: "900", fontSize: 12 },
});
