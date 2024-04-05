import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { Path } from "react-native-svg";

import { Color } from "@/constants/color-constant";

interface FillAnimationProp {
  d: string;
  strokeWidth?: number;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function FillAnimation({
  d,
  strokeWidth = 0,
}: FillAnimationProp) {
  const [length, setLength] = useState(0);
  const ref = useRef<any>(null);
  return (
    <AnimatedPath
      onLayout={() => {
        setLength(ref.current.getTotalLength());
      }}
      d={d}
      stroke={Color.WHITE}
      strokeWidth={strokeWidth}
      ref={ref}
    />
  );
}

const styles = StyleSheet.create({});
