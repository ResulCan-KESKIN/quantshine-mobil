import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { C } from "../theme/colors";

export function MetricCard({
  title,
  value,
  tone = "accent",
}: {
  title: string;
  value: string;
  tone?: "accent" | "green" | "red";
}) {
  const border = tone === "green" ? C.green : tone === "red" ? C.red : C.accent;

  return (
    <View style={[styles.card, { borderTopColor: border }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: C.panel,
    borderColor: C.stroke,
    borderWidth: 1,
    borderTopWidth: 3,
    borderRadius: 18,
    padding: 14,
    flex: 1,
    minHeight: 110,
    justifyContent: "space-between",
  },
  title: { color: C.sub, fontWeight: "800", fontSize: 12, letterSpacing: 0.4 },
  value: { color: C.text, fontWeight: "900", fontSize: 18 },
});
