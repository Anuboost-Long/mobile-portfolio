import React, { ReactNode, useEffect, useState } from "react"
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native"
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated"

import { ANIMATION_DURATION } from "./presets/collapsible-presets"

interface CollapsibleProp {
  children: ReactNode | ReactNode[]
  style?: ViewStyle
  expanded?: boolean
}

export default function Collapsible({
  children,
  style,
  expanded
}: CollapsibleProp) {
  const [isMesured, setIsMesured] = useState(false)
  const [mesuredHeight, setMeasuredHeight] = useState(0)

  const progress = useSharedValue(0)

  const collapsible = useAnimatedStyle(() => {
    return {
      height: interpolate(progress.value, [0, 1], [0, mesuredHeight]),
      overflow: isMesured ? "hidden" : "visible"
    }
  })

  useEffect(() => {
    changeExpand()
  })

  const changeExpand = () => {
    if (!expanded) {
      progress.value = withTiming(0, {
        duration: ANIMATION_DURATION,
        easing: Easing.inOut(Easing.cubic)
      })
    } else {
      progress.value = withTiming(1, {
        duration: ANIMATION_DURATION,
        easing: Easing.inOut(Easing.cubic)
      })
    }
  }

  const handleLayout = (e: LayoutChangeEvent) => {
    if (!isMesured) {
      setMeasuredHeight(e.nativeEvent.layout.height)
      setIsMesured(true)
    }
  }

  return (
    <Animated.View
      onLayout={handleLayout}
      style={[style, isMesured && collapsible]}
    >
      <View style={[!isMesured && styles.opacity]}>{children}</View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  opacity: {
    opacity: 0
  }
})
