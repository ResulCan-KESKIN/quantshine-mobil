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
import { SectionCard } from "../../src/ui/SectionCard";

export default function ReportingScreen() {
  const [msg, setMsg] = useState("");

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ padding: 16, paddingBottom: 28 }}
    >
      <SectionCard title="Raporlama ve Mesajlaşma">
        <Text style={styles.label}>Yatırımcı Seçiniz</Text>
        <View style={styles.selectFake}>
          <Text style={{ color: C.muted }}>
            Rapor gönderilecek yatırımcıyı seçin...
          </Text>
        </View>

        <View style={{ height: 12 }} />

        <Text style={styles.label}>Rapor İçeriği / Mesaj</Text>
        <TextInput
          value={msg}
          onChangeText={setMsg}
          placeholder="Yatırımcıya iletilecek rapor detaylarını buraya yazınız..."
          placeholderTextColor={C.muted}
          multiline
          style={styles.textArea}
        />

        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Raporu Gönder</Text>
        </Pressable>
      </SectionCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.bg },
  label: { color: C.sub, fontWeight: "900", marginBottom: 6 },
  selectFake: {
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  textArea: {
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: C.text,
    minHeight: 180,
    textAlignVertical: "top",
  },
  btn: {
    marginTop: 14,
    backgroundColor: C.accent,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  btnText: { color: "white", fontWeight: "900" },
});
