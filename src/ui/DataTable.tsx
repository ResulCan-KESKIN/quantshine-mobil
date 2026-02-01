import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { C } from "../theme/colors";
import { HorizontalTable } from "./HorizontalTable";

type Props = {
  columns: string[];
  rows: (string | number)[][];
  minWidth?: number;
  // opsiyonel: kolon genişlikleri (px). Verirsen flex kullanılmaz.
  colWidths?: number[];
  // opsiyonel: hücre satırı (default 1 = nowrap)
  maxLines?: number;
};

export function DataTable({
  columns,
  rows,
  minWidth = 900,
  colWidths,
  maxLines = 1,
}: Props) {
  const useFixed =
    Array.isArray(colWidths) && colWidths.length === columns.length;

  return (
    <HorizontalTable minWidth={minWidth}>
      {/* HEAD */}
      <View style={styles.head}>
        {columns.map((c, idx) => (
          <Text
            key={`${c}-${idx}`}
            style={[
              styles.hcell,
              useFixed
                ? { width: colWidths![idx], flexGrow: 0, flexShrink: 0 }
                : null,
            ]}
            numberOfLines={1}
          >
            {c}
          </Text>
        ))}
      </View>

      {/* ROWS */}
      {rows.map((r, ridx) => (
        <View key={ridx} style={styles.row}>
          {r.map((cell, cidx) => (
            <Text
              key={cidx}
              style={[
                styles.cell,
                useFixed
                  ? { width: colWidths![cidx], flexGrow: 0, flexShrink: 0 }
                  : null,
              ]}
              numberOfLines={maxLines}
            >
              {String(cell)}
            </Text>
          ))}
        </View>
      ))}
    </HorizontalTable>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    backgroundColor: "#0A0E1A",
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  hcell: {
    flex: 1,
    color: C.accent,
    fontSize: 10,
    fontWeight: "900",
    paddingRight: 8,
  },

  row: {
    marginTop: 10,
    backgroundColor: C.panel,
    borderColor: C.stroke,
    borderWidth: 1,
    borderRadius: 14,
    padding: 10,
    flexDirection: "row",
  },
  cell: { flex: 1, color: C.text, fontSize: 12, paddingRight: 8 },
});
