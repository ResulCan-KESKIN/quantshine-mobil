import React, { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { C } from "../../src/theme/colors";
import { SectionCard } from "../../src/ui/SectionCard";

export default function AdvisorReporting() {
  const [investor, setInvestor] = useState("");
  const [msg, setMsg] = useState("");

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
        Raporlama ve Mesajlaşma
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
        Yatırımcılara özel analiz raporlarını ve bilgilendirme notlarını buradan
        iletebilirsin.
      </Text>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <View style={{ width: 520, maxWidth: "100%" }}>
          <SectionCard title="">
            <Text
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 12,
                marginBottom: 8,
              }}
            >
              Yatırımcı Seçiniz
            </Text>
            <TextInput
              value={investor}
              onChangeText={setInvestor}
              placeholder="Rapor gönderilecek yatırımcıyı seçin..."
              placeholderTextColor="rgba(255,255,255,0.35)"
              style={{
                borderWidth: 1,
                borderColor: C.stroke,
                backgroundColor: "rgba(255,255,255,0.02)",
                color: C.text,
                borderRadius: 12,
                paddingHorizontal: 12,
                paddingVertical: 10,
              }}
            />

            <Text
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 12,
                marginTop: 14,
                marginBottom: 8,
              }}
            >
              Rapor İçeriği / Mesaj
            </Text>
            <TextInput
              value={msg}
              onChangeText={setMsg}
              placeholder="Yatırımcıya iletilecek rapor detaylarını buraya yazınız..."
              placeholderTextColor="rgba(255,255,255,0.35)"
              multiline
              style={{
                minHeight: 220,
                textAlignVertical: "top",
                borderWidth: 1,
                borderColor: C.stroke,
                backgroundColor: "rgba(255,255,255,0.02)",
                color: C.text,
                borderRadius: 12,
                paddingHorizontal: 12,
                paddingVertical: 12,
              }}
            />

            <View style={{ alignItems: "flex-end", marginTop: 14 }}>
              <Pressable
                style={{
                  backgroundColor: C.accent,
                  paddingVertical: 12,
                  paddingHorizontal: 18,
                  borderRadius: 12,
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "900" }}>
                  Raporu Gönder
                </Text>
              </Pressable>
            </View>
          </SectionCard>
        </View>
      </View>
    </ScrollView>
  );
}
