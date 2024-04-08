import React, { useRef } from "react";
import Animated from "react-native-reanimated";
import { Path } from "react-native-svg";

import { Color } from "@/constants/color-constant";

interface FillAnimationProp {
  d: string;
  strokeWidth?: number;
  fill?: string;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function FillAnimation({
  d,
  strokeWidth = 0,
  fill = "none",
}: Readonly<FillAnimationProp>) {
  const ref = useRef<any>(null);
  return (
    <AnimatedPath
      d={d}
      stroke={Color.WHITE}
      strokeWidth={strokeWidth}
      ref={ref}
      fill={fill}
    />
  );
}
