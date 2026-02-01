import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { C } from "../../src/theme/colors";
import { HorizontalTable } from "../../src/ui/HorizontalTable";
import { SectionCard } from "../../src/ui/SectionCard";

type RequestRow = {
  tc: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
};

const DATA: RequestRow[] = [
  {
    tc: "12345678901",
    name: "Ahmet",
    surname: "Yılmaz",
    email: "ahmet@mail.com",
    phone: "0532 111 22 33",
  },
  {
    tc: "98765432109",
    name: "Ayşe",
    surname: "Kaya",
    email: "ayse@mail.com",
    phone: "0544 222 33 44",
  },
  {
    tc: "55566677788",
    name: "Mehmet",
    surname: "Demir",
    email: "mehmet@mail.com",
    phone: "0505 333 44 55",
  },
];

type ColKey = "tc" | "name" | "surname" | "email" | "phone" | "actions";

const COLUMNS: { key: ColKey; title: string; minWidth: number }[] = [
  { key: "tc", title: "TC", minWidth: 140 },
  { key: "name", title: "Ad", minWidth: 120 },
  { key: "surname", title: "Soyad", minWidth: 140 },
  { key: "email", title: "E-Posta", minWidth: 220 },
  { key: "phone", title: "Telefon", minWidth: 140 },
  { key: "actions", title: "İşlemler", minWidth: 220 },
];

export default function RequestsScreen() {
  const minTableWidth = COLUMNS.reduce((sum, c) => sum + c.minWidth, 0) + 40;

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ padding: 16, paddingBottom: 28 }}
    >
      <SectionCard title="Kayıt İstekleri">
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
          {DATA.map((r) => (
            <View key={r.tc} style={styles.row}>
              <Text style={[styles.cell, { minWidth: 140 }]} numberOfLines={1}>
                {r.tc}
              </Text>
              <Text
                style={[styles.cell, { minWidth: 120, fontWeight: "900" }]}
                numberOfLines={1}
              >
                {r.name}
              </Text>
              <Text style={[styles.cell, { minWidth: 140 }]} numberOfLines={1}>
                {r.surname}
              </Text>
              <Text style={[styles.cell, { minWidth: 220 }]} numberOfLines={1}>
                {r.email}
              </Text>
              <Text style={[styles.cell, { minWidth: 140 }]} numberOfLines={1}>
                {r.phone}
              </Text>

              <View style={[styles.actionsWrap, { minWidth: 220 }]}>
                <Pressable style={[styles.btn, styles.btnAccept]}>
                  <Text style={styles.btnText} numberOfLines={1}>
                    Kabul Et
                  </Text>
                </Pressable>
                <Pressable style={[styles.btn, styles.btnReject]}>
                  <Text style={styles.btnText} numberOfLines={1}>
                    Reddet
                  </Text>
                </Pressable>
              </View>
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

  actionsWrap: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-start",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  btnAccept: { backgroundColor: C.green },
  btnReject: { backgroundColor: C.red },
  btnText: { color: "white", fontWeight: "900", fontSize: 12 },
});
