import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { C } from "../../src/theme/colors";
import { HorizontalTable } from "../../src/ui/HorizontalTable";
import { SectionCard } from "../../src/ui/SectionCard";

type PortfolioRow = {
  symbol: string;
  investor: string;
  avgCost: string;
  lot: string;
  pnl: string;
};

const PORTFOLIO: PortfolioRow[] = [
  {
    symbol: "THYAO",
    investor: "Ahmet Yılmaz",
    avgCost: "₺280.00",
    lot: "100",
    pnl: "+₺1,500",
  },
  {
    symbol: "ASELS",
    investor: "Ayşe Kaya",
    avgCost: "₺60.10",
    lot: "250",
    pnl: "-₺450",
  },
  {
    symbol: "SASA",
    investor: "Mehmet Demir",
    avgCost: "₺42.50",
    lot: "500",
    pnl: "+₺2,120",
  },
];

type ColKey = "symbol" | "investor" | "avgCost" | "lot" | "pnl";

const COLUMNS: { key: ColKey; title: string; minWidth: number }[] = [
  { key: "symbol", title: "Hisse", minWidth: 100 },
  { key: "investor", title: "Ad Soyad", minWidth: 180 },
  { key: "avgCost", title: "Maliyet", minWidth: 120 },
  { key: "lot", title: "Lot", minWidth: 90 },
  { key: "pnl", title: "K/Z", minWidth: 110 },
];

export default function TradingScreen() {
  const [adet, setAdet] = useState("");

  const minTableWidth = COLUMNS.reduce((sum, c) => sum + c.minWidth, 0) + 40;

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ padding: 16, paddingBottom: 28 }}
    >
      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Toplam Portföy Değeri</Text>
        <Text style={styles.bannerValue}>₺1,245,600.00</Text>
      </View>

      <View style={{ height: 12 }} />

      {/* Layout: Mobil için alt alta, geniş ekranda yan yana hissi */}
      <View style={styles.grid}>
        {/* Left */}
        <View style={{ flex: 1 }}>
          <SectionCard title="Hisse Alım / Satım">
            <TextInput
              placeholder="Hisse Seçiniz..."
              placeholderTextColor={C.muted}
              style={styles.input}
            />
            <View style={{ height: 10 }} />
            <TextInput
              placeholder="İşlem Fiyatı Seçin..."
              placeholderTextColor={C.muted}
              style={styles.input}
            />
            <View style={{ height: 10 }} />
            <TextInput
              value={adet}
              onChangeText={setAdet}
              placeholder="Adet"
              placeholderTextColor={C.muted}
              style={styles.input}
              keyboardType="numeric"
            />

            <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
              <Pressable
                style={[styles.actionBtn, { backgroundColor: C.green }]}
              >
                <Text style={styles.actionText}>AL</Text>
              </Pressable>
              <Pressable style={[styles.actionBtn, { backgroundColor: C.red }]}>
                <Text style={styles.actionText}>SAT</Text>
              </Pressable>
            </View>
          </SectionCard>

          <View style={{ height: 12 }} />

          {/* Portfolio Table */}
          <SectionCard title="Portföy">
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
              {PORTFOLIO.map((r, idx) => {
                const pnlColor = r.pnl.trim().startsWith("-") ? C.red : C.green;

                return (
                  <View key={`${r.symbol}-${idx}`} style={styles.row}>
                    <Text
                      style={[
                        styles.cell,
                        { minWidth: 100, fontWeight: "900" },
                      ]}
                      numberOfLines={1}
                    >
                      {r.symbol}
                    </Text>

                    <Text
                      style={[styles.cell, { minWidth: 180 }]}
                      numberOfLines={1}
                    >
                      {r.investor}
                    </Text>

                    <Text
                      style={[styles.cell, { minWidth: 120 }]}
                      numberOfLines={1}
                    >
                      {r.avgCost}
                    </Text>

                    <Text
                      style={[styles.cell, { minWidth: 90 }]}
                      numberOfLines={1}
                    >
                      {r.lot}
                    </Text>

                    <Text
                      style={[
                        styles.cell,
                        { minWidth: 110, color: pnlColor, fontWeight: "900" },
                      ]}
                      numberOfLines={1}
                    >
                      {r.pnl}
                    </Text>
                  </View>
                );
              })}
            </HorizontalTable>
          </SectionCard>
        </View>

        {/* Right */}
        <View style={{ flex: 1 }}>
          <SectionCard title="ALGORİTMA">
            <Text style={{ color: C.muted, lineHeight: 18 }}>
              Bu alan ileride eklenecek algoritmalar için ayrılmıştır.
            </Text>
          </SectionCard>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg },

  banner: {
    backgroundColor: C.accent,
    borderRadius: 16,
    padding: 14,
    alignItems: "center",
  },
  bannerTitle: { color: "white", fontWeight: "800", opacity: 0.95 },
  bannerValue: {
    color: "white",
    fontWeight: "900",
    fontSize: 18,
    marginTop: 4,
  },

  grid: {
    flexDirection: "column",
    gap: 12,
  },

  input: {
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: C.text,
  },

  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  actionText: { color: "white", fontWeight: "900" },

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
});
