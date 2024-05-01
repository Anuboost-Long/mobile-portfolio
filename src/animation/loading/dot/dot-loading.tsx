import React from "react"
import { StyleProp, View } from "react-native"
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils"

import { GlobalStyle } from "@/utils/globalstyle"

import DotCollision from "./components/dot-collision"
import DotElastic from "./components/dot-elastic"
import DotFalling from "./components/dot-falling"
import DotOpacity from "./components/dot-opacity"
import DotRising from "./components/dot-rising"
import DotStretching from "./components/dot-stretching"
import { DEFAULT_DURATION, DOT_TYPE, DOTS } from "./constant/dot-animation"

interface LoadingProp {
  dotStyle?: StyleProp<ViewProps>
  animationDuration?: number
  dotType?: string
}

export default function DotLoading({
  dotStyle = {},
  animationDuration = DEFAULT_DURATION,
  dotType = DOT_TYPE.dot_elastic
}: Readonly<LoadingProp>) {
  const renderItem = (item: number) => {
    switch (dotType) {
      case DOT_TYPE.dot_elastic:
        return (
          <DotElastic
            item={item}
            key={item}
            style={dotStyle}
            duration={animationDuration}
          />
        )
      case DOT_TYPE.dot_opacity:
        return (
          <DotOpacity
            item={item}
            key={item}
            style={dotStyle}
            duration={animationDuration}
          />
        )
      case DOT_TYPE.dot_rising:
        return (
          <DotRising
            item={item}
            key={item}
            style={dotStyle}
            duration={animationDuration}
          />
        )

      case DOT_TYPE.dot_falling:
        return (
          <DotFalling
            item={item}
            key={item}
            style={dotStyle}
            duration={animationDuration}
          />
        )

      case DOT_TYPE.dot_collision:
        return (
          <DotCollision
            item={item}
            key={item}
            style={dotStyle}
            duration={animationDuration}
          />
        )

      case DOT_TYPE.dot_stretching:
        return (
          <DotStretching
            item={item}
            key={item}
            style={dotStyle}
            duration={animationDuration}
          />
        )

      default:
        return <></>
    }
  }

  return (
    <View style={GlobalStyle.rowCenter}>
      {DOTS.map((item) => renderItem(item))}
    </View>
  )
}
