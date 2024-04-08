import React from "react";

import { IconAsset } from "@/assets/icon-assets";
import { Dimension } from "@/constants/dimension";

interface LogoProp {
  width: number;
}

export default function Logo({
  width = Dimension.ScreenWidth / 1.5,
}: LogoProp) {
  const vWidth = 510;
  const vHeight = 421;
  const height = width * (vHeight / vWidth);

  return <IconAsset.Logo height={height} width={width} />;
}
