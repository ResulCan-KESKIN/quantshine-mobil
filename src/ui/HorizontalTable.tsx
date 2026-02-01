import React from "react";
import { ScrollView, View } from "react-native";

export function HorizontalTable({
  children,
  minWidth = 1000,
  showIndicator = true,
}: {
  children: React.ReactNode;
  minWidth?: number;
  showIndicator?: boolean;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={showIndicator}
      nestedScrollEnabled
    >
      <View style={{ minWidth }}>{children}</View>
    </ScrollView>
  );
}
