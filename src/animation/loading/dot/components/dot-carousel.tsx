import React, { useEffect } from "react"
import { StyleProp, StyleSheet, ViewProps } from "react-native"
import Animated, {
  cancelAnimation,
  Easing,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
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

export default function DotCarousel({
  duration = 1000,
  style = {},
  item,
  stop = false
}: Readonly<AnimationProp>) {
  const translateX = useSharedValue(0)

  const movingDistance = 5
  const itemSize = 10
  const itemMargin = 2.5 * 3
  const movement =
    movingDistance + itemMargin * (item - 1) + itemSize * (item - 1)
  const backMovement =
    movingDistance +
    itemMargin * (DOTS.length - item) +
    itemSize * (DOTS.length - item)

  const animate = () => {
    translateX.value = withRepeat(
      withDelay(
        0,
        withSequence(
          withTiming(-movement, {
            duration: duration * 1.5,
            easing: Easing.linear
          }),
          withTiming(backMovement, {
            duration: duration * 1.5,
            easing: Easing.linear
          })
        )
      ),
      -1
    )
  }

  const animateIndex1 = () => {
    translateX.value = withDelay(
      duration * (item - 1) * 0.7,
      withSequence(
        withTiming(-movement, {
          duration: duration * 1.5,
          easing: Easing.inOut(Easing.ease)
        }),
        withTiming(
          backMovement,
          { duration: duration * 1.5, easing: Easing.inOut(Easing.ease) },
          () => {
            runOnJS(animate)()
          }
        )
      )
    )
  }

  useEffect(() => {
    if (stop) {
      cancelAnimation(translateX)
    } else {
      animateIndex1()
    }
  })

  const styling = useAnimatedStyle(() => {
    const inputRange = [-movement, 0, backMovement]
    const outputRange = [0.5, 1, 0.5]
    const scale = interpolate(
      translateX.value,
      inputRange,
      outputRange,
      Extrapolation.CLAMP
    )
    return {
      transform: [{ translateX: translateX.value }, { scale }]
    }
  })

  return <Animated.View style={[styles.dot, style, styling]} />
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
