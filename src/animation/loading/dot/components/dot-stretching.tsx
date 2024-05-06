import React, { useEffect } from "react"
import { StyleProp, StyleSheet, ViewProps } from "react-native"
import Animated, {
  cancelAnimation,
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from "react-native-reanimated"
import { moderateScale } from "react-native-size-matters"

import { Color } from "@/constants/color-constant"

interface AnimationProp {
  duration?: number
  style?: StyleProp<ViewProps>
  item: number
  stop: boolean
}

export default function DotStretching({
  duration = 1000,
  style = {},
  item,
  stop = false
}: Readonly<AnimationProp>) {
  const progress = useSharedValue(0)

  const animate = () => {
    progress.value = withRepeat(
      withSequence(
        withTiming(1, {
          duration: duration,
          easing: Easing.inOut(Easing.ease)
        }),
        withTiming(0, {
          duration: duration,
          easing: Easing.inOut(Easing.ease)
        })
      ),
      -1
    )
  }

  const dotStyle = useAnimatedStyle(() => {
    switch (item) {
      case 1:
        return {
          transform: [
            { translateX: interpolate(progress.value, [0, 1], [10, -20]) },
            { scale: interpolate(progress.value, [0, 1], [0.8, 0.6]) }
          ]
        }
      case 2:
        return {
          transform: [
            { scale: interpolate(progress.value, [0, 1], [1.2, 0.6]) }
          ]
        }
      case 3:
        return {
          transform: [
            { translateX: interpolate(progress.value, [0, 1], [-10, 20]) },
            { scale: interpolate(progress.value, [0, 1], [0.8, 0.6]) }
          ]
        }
      default:
        return {}
    }
  })

  useEffect(() => {
    if (stop) {
      cancelAnimation(progress)
    } else {
      animate()
    }
  })

  return <Animated.View style={[styles.dot, style, dotStyle]} />
}

const styles = StyleSheet.create({
  dot: {
    height: moderateScale(10),
    width: moderateScale(10),
    backgroundColor: Color.WHITE,
    borderRadius: moderateScale(100)
  }
})
