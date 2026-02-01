import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { C } from "../../src/theme/colors";
import { DataTable } from "../../src/ui/DataTable";
import { SectionCard } from "../../src/ui/SectionCard";

export default function AdvisorsScreen() {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ padding: 16, paddingBottom: 30 }}
    >
      <SectionCard title="Danışman Listesi">
        <DataTable
          minWidth={900}
          colWidths={[
            150, // TC
            180, // Ad Soyad
            220, // E-posta
            140, // Telefon
            160, // Sorumlu Fon
            120, // Fon K/Z
          ]}
          columns={[
            "TC Kimlik No",
            "Ad Soyad",
            "E-Posta",
            "Telefon",
            "Sorumlu Fon",
            "Fon K/Z",
          ]}
          rows={[
            [
              "12345678901",
              "Murat Güneş",
              "murat@quantshine.com",
              "0532 555 44 33",
              "Teknoloji Fonu",
              "+15.2%",
            ],
            [
              "98765432109",
              "Selin Yılmaz",
              "selin@quantshine.com",
              "0544 333 22 11",
              "Altın Fonu",
              "-2.4%",
            ],
            [
              "55566677788",
              "Can Demir",
              "can@quantshine.com",
              "0505 111 88 99",
              "Sürdürülebilirlik",
              "+8.7%",
            ],
          ]}
        />
      </SectionCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg },
});
