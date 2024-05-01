import React, { useEffect } from "react"
import { StyleProp, StyleSheet, ViewProps } from "react-native"
import Animated, {
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
}

export default function DotFalling({
  duration = 1000,
  style = {},
  item
}: Readonly<AnimationProp>) {
  const progress = useSharedValue(0)

  const animate = () => {
    progress.value = withRepeat(
      withSequence(
        withTiming(10, {
          duration: duration * 1.5,
          easing: Easing.inOut(Easing.ease)
        }),
        withTiming(0, {
          duration: 0,
          easing: Easing.inOut(Easing.ease)
        })
      ),
      -1
    )
  }

  const dotStyle = useAnimatedStyle(() => {
    const delay = item * 2.5
    return {
      transform: [
        {
          translateY: interpolate(
            progress.value,
            [0, delay, delay + 0.1, 10],
            [0, 30, -30, 0]
          )
        }
      ],
      opacity: interpolate(
        progress.value,
        [0, delay, delay + 0.1, 10],
        [1, 0, 0, 1]
      )
    }
  })

  useEffect(() => {
    animate()
  })

  return <Animated.View style={[styles.dot, style, dotStyle]} />
}

const styles = StyleSheet.create({
  dot: {
    height: moderateScale(10),
    width: moderateScale(10),
    marginHorizontal: moderateScale(1),
    backgroundColor: Color.WHITE,
    borderRadius: moderateScale(100)
  }
})
