import React from "react"
import { StyleProp, View } from "react-native"
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils"

import { GlobalStyle } from "@/utils/globalstyle"

import DotElastic from "./components/dot-elastic"
import { DEFAULT_DURATION, DOTS } from "./constant/dot-animation"

interface LoadingProp {
  dotStyle?: StyleProp<ViewProps>
  intervalDuration?: number
  animationDuration?: number
}

export default function DotLoading({
  dotStyle = {},
  animationDuration = DEFAULT_DURATION
}: LoadingProp) {
  const renderItem = (item: number) => {
    return (
      <DotElastic
        item={item}
        key={item}
        style={dotStyle}
        duration={animationDuration}
      />
    )
  }

  return (
    <View style={GlobalStyle.rowCenter}>
      {DOTS.map((item) => renderItem(item))}
    </View>
  )
}
