import React from "react"
import { DimensionValue, View } from "react-native"

interface DividerProp {
  backgroundColor?: string
  width?: DimensionValue | null
  height?: DimensionValue | null
  borderRadius?: number
}

export default function Divider({
  width,
  height,
  backgroundColor,
  borderRadius = 0
}: Readonly<DividerProp>) {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius
      }}
    />
  )
}
