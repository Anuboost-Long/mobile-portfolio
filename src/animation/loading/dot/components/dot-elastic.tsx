import React, { useEffect } from "react"
import { StyleProp, StyleSheet, ViewProps } from "react-native"
import Animated, {
  cancelAnimation,
  Easing,
  runOnJS,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming
} from "react-native-reanimated"
import { moderateScale } from "react-native-size-matters"

import { Color } from "@/constants/color-constant"

import { DOTS } from "../constant/dot-animation"

interface AnimationProp {
  duration?: number
  style?: StyleProp<ViewProps>
  item: number
  stop: boolean
}

export default function DotElastic({
  duration = 1000,
  style = {},
  item,
  stop = false
}: Readonly<AnimationProp>) {
  const scaleY = useSharedValue(1)
  const animate = () => {
    scaleY.value = withRepeat(
      withDelay(
        (duration / 2) * DOTS.length,
        withSequence(
          withTiming(1.5, {
            duration: duration,
            easing: Easing.inOut(Easing.ease)
          }),
          withTiming(1, {
            duration: duration,
            easing: Easing.inOut(Easing.ease)
          })
        )
      ),
      -1
    )
  }

  const animateIndex1 = () => {
    scaleY.value = withDelay(
      duration * item,
      withSequence(
        withTiming(1.5, {
          duration: duration,
          easing: Easing.inOut(Easing.ease)
        }),
        withTiming(
          1,
          { duration: duration, easing: Easing.inOut(Easing.ease) },
          () => {
            runOnJS(animate)()
          }
        )
      )
    )
  }

  useEffect(() => {
    if (stop) {
      cancelAnimation(scaleY)
    } else {
      animateIndex1()
    }
  })

  return (
    <Animated.View
      style={[styles.dot, style, { transform: [{ scaleY: scaleY }] }]}
    />
  )
}

const styles = StyleSheet.create({
  dot: {
    height: moderateScale(10),
    width: moderateScale(10),
    marginHorizontal: moderateScale(2.5),
    backgroundColor: Color.WHITE,
    borderRadius: moderateScale(100)
  }
})
