import React from "react";
import { View } from "react-native";
import Svg, { Circle, Line, Polyline, Text as SvgText } from "react-native-svg";
import { C } from "../theme/colors";

type Props = {
  data: number[];
  labels: string[];
  width?: number;
  height?: number;
  maxXLabels?: number;
};

export function LineChart({
  data,
  labels,
  width = 320,
  height = 170,
  maxXLabels = 5,
}: Props) {
  const safeLen = Math.max(2, data.length);
  const safeLabelLen = Math.max(2, labels.length);

  const compact = width < 340;

  const paddingLeft = compact ? 38 : 44;
  const paddingBottom = compact ? 22 : 28;
  const paddingTop = 14;
  const paddingRight = 12;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const rawMin = Math.min(...data);
  const rawMax = Math.max(...data);
  const rawRange = rawMax - rawMin || 1;

  // min-max'a görsel nefes ver (sıfır/min karışıklığını azaltır)
  const pad = rawRange * 0.06; // %6 padding
  const min = rawMin - pad;
  const max = rawMax + pad;
  const range = max - min || 1;

  const yTicks = 4;

  const points = data.map((v, i) => {
    const x = paddingLeft + (i * chartWidth) / (safeLen - 1);
    const y = paddingTop + (1 - (v - min) / range) * chartHeight;
    return { x, y };
  });

  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");

  // X label seyret
  const step = Math.max(1, Math.ceil(labels.length / maxXLabels));
  const xIdx = labels
    .map((_, i) => i)
    .filter((i) => i % step === 0 || i === labels.length - 1);

  return (
    <View>
      <Svg width={width} height={height}>
        {/* Y axis line (origin netleşsin) */}
        <Line
          x1={paddingLeft}
          y1={paddingTop}
          x2={paddingLeft}
          y2={height - paddingBottom}
          stroke={C.stroke}
        />

        {/* Y grid + fiyat etiketleri */}
        {Array.from({ length: yTicks + 1 }).map((_, i) => {
          const y = paddingTop + (i * chartHeight) / yTicks;
          const price = max - (i * range) / yTicks;

          return (
            <React.Fragment key={i}>
              <Line
                x1={paddingLeft}
                y1={y}
                x2={width - paddingRight}
                y2={y}
                stroke={C.stroke}
                strokeDasharray="4 4"
              />
              <SvgText
                x={paddingLeft - 8}
                y={y + 4}
                fontSize="10"
                fill={C.sub}
                textAnchor="end"
              >
                ₺{price.toFixed(0)}
              </SvgText>
            </React.Fragment>
          );
        })}

        {/* X axis */}
        <Line
          x1={paddingLeft}
          y1={height - paddingBottom}
          x2={width - paddingRight}
          y2={height - paddingBottom}
          stroke={C.stroke}
        />

        {/* X labels (seyreltilmiş) */}
        {xIdx.map((i) => {
          const x = paddingLeft + (i * chartWidth) / (safeLabelLen - 1);
          const label = labels[i] ?? "";
          return (
            <SvgText
              key={i}
              x={x}
              y={height - 8}
              fontSize="10"
              fill={C.sub}
              textAnchor="middle"
            >
              {label}
            </SvgText>
          );
        })}

        {/* Line */}
        <Polyline
          points={polyline}
          fill="none"
          stroke={C.accent}
          strokeWidth="2.6"
        />

        {/* Points */}
        {points.map((p, i) => (
          <Circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3.5"
            fill="white"
            stroke={C.accent}
            strokeWidth="2"
          />
        ))}
      </Svg>
    </View>
  );
}
