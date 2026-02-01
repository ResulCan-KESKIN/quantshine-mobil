import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { C } from "../theme/colors";

export function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ marginTop: 10 }}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: C.panel,
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 18,
    padding: 14,
  },
  title: { color: C.text, fontWeight: "900", fontSize: 14 },
});
