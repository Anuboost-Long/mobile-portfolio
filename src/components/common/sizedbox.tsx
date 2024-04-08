import React from "react";
import { View } from "react-native";

interface SizedBoxProp {
  width?: number;
  height?: number;
}

export default function SizedBox({ width = 0, height = 0 }: SizedBoxProp) {
  return <View style={{ width, height }} />;
}
