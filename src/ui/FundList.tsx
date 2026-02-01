import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { C } from "../theme/colors";

export type FundItem = {
  name: string;
  pnl: string; // "+12%" / "-2.5%"
  advisors: number; // 4
  investors: number; // 120
  value: string; // "₺150.50"
  lot: string; // "5000"
};

function toneColor(pnl: string) {
  const s = pnl.trim();
  if (s.startsWith("-")) return C.red;
  return C.green;
}

export function FundList({ items }: { items: FundItem[] }) {
  return (
    <View style={styles.wrap}>
      {items.map((it, idx) => (
        <View key={`${it.name}-${idx}`} style={styles.card}>
          {/* Üst satır: Fon adı + K/Z */}
          <View style={styles.topRow}>
            <Text style={styles.title} numberOfLines={1}>
              {it.name}
            </Text>
            <Text
              style={[styles.pnl, { color: toneColor(it.pnl) }]}
              numberOfLines={1}
            >
              {it.pnl}
            </Text>
          </View>

          {/* Alt satır: meta bilgiler */}
          <View style={styles.metaRow}>
            <View style={styles.metaBox}>
              <Text style={styles.metaLabel}>Danışman</Text>
              <Text style={styles.metaValue}>{it.advisors}</Text>
            </View>

            <View style={styles.metaBox}>
              <Text style={styles.metaLabel}>Yatırımcı</Text>
              <Text style={styles.metaValue}>{it.investors}</Text>
            </View>

            <View style={styles.metaBox}>
              <Text style={styles.metaLabel}>Değer</Text>
              <Text style={styles.metaValue}>{it.value}</Text>
            </View>

            <View style={styles.metaBox}>
              <Text style={styles.metaLabel}>Lot</Text>
              <Text style={styles.metaValue}>{it.lot}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 10 },

  card: {
    backgroundColor: C.panel,
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  title: { color: C.text, fontWeight: "900", fontSize: 14, flex: 1 },
  pnl: { fontWeight: "900", fontSize: 14 },

  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  metaBox: {
    minWidth: 120,
    flexGrow: 1,
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  metaLabel: { color: C.sub, fontSize: 10, fontWeight: "800" },
  metaValue: { color: C.text, marginTop: 2, fontWeight: "900", fontSize: 12 },
});
