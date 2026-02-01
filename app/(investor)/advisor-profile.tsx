import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { C } from "../../src/theme/colors";
import { SectionCard } from "../../src/ui/SectionCard";

type Advisor = {
  id: string;
  name: string;
  title: string;
  email: string;
  fund: string;
  initials: string;
};

export default function InvestorAdvisorProfile() {
  const advisors = useMemo<Advisor[]>(
    () => [
      {
        id: "a1",
        name: "Can Yaman",
        title: "Sertifikalı Portföy Yöneticisi",
        email: "can.yaman@quantshine.com",
        fund: "Teknoloji Fonu",
        initials: "CY",
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState(advisors[0]?.id);
  const selected = advisors.find((a) => a.id === selectedId) ?? advisors[0];

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
        Danışman Profili
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
        Yatırımlarınızı yöneten uzmanların iletişim ve uzmanlık bilgileri.
      </Text>

      {/* Select */}
      <SectionCard title="">
        <Text
          style={{
            color: "rgba(255,255,255,0.65)",
            fontWeight: "800",
            marginBottom: 10,
          }}
        >
          Bilgilerini görüntülemek istediğiniz danışmanı seçin
        </Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {advisors.map((a) => {
            const active = a.id === selectedId;
            return (
              <Pressable
                key={a.id}
                onPress={() => setSelectedId(a.id)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: active
                    ? "rgba(91,90,243,0.55)"
                    : "rgba(255,255,255,0.10)",
                  backgroundColor: active
                    ? "rgba(91,90,243,0.18)"
                    : "transparent",
                }}
              >
                <Text
                  style={{
                    color: active
                      ? (C.text ?? "#fff")
                      : "rgba(255,255,255,0.75)",
                    fontWeight: "900",
                  }}
                >
                  {a.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </SectionCard>

      {/* Profile card */}
      <View style={{ marginTop: 12 }}>
        <SectionCard title="">
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: "rgba(91,90,243,0.25)",
                borderWidth: 1,
                borderColor: "rgba(91,90,243,0.35)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: C.text ?? "#fff",
                  fontWeight: "900",
                  fontSize: 18,
                }}
              >
                {selected.initials}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: C.text ?? "#fff",
                  fontWeight: "900",
                  fontSize: 18,
                }}
              >
                {selected.name}
              </Text>
              <Text
                style={{
                  color: "rgba(91,90,243,0.9)",
                  fontWeight: "800",
                  marginTop: 2,
                }}
              >
                {selected.title}
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: "rgba(255,255,255,0.06)",
              marginVertical: 14,
            }}
          />

          <View style={{ flexDirection: "row", gap: 12 }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 11,
                  fontWeight: "900",
                }}
              >
                E-POSTA ADRESİ
              </Text>
              <Text
                style={{
                  color: C.text ?? "#fff",
                  fontWeight: "800",
                  marginTop: 6,
                }}
              >
                {selected.email}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 11,
                  fontWeight: "900",
                }}
              >
                SORUMLU OLDUĞU FON
              </Text>
              <Text
                style={{
                  color: C.accent ?? "#5B5AF3",
                  fontWeight: "900",
                  marginTop: 6,
                }}
              >
                {selected.fund}
              </Text>
            </View>
          </View>
        </SectionCard>
      </View>
    </ScrollView>
  );
}
