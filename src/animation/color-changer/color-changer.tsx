import React, { useEffect } from "react"
import { StyleSheet } from "react-native"
import Animated, {
  Easing,
  runOnJS,
  useSharedValue,
  withTiming
} from "react-native-reanimated"
import { moderateScale } from "react-native-size-matters"

import { Color } from "@/constants/color-constant"

const colorSpectrum = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
]

export default function ColorChanger() {
  const backgroundColor = useSharedValue<string>(Color.ACCENT_RED)

  const animate1 = () => {
    backgroundColor.value = withTiming(
      generateColor(),
      {
        duration: 1000,
        easing: Easing.inOut(Easing.ease)
      },
      () => {
        runOnJS(animate2)()
      }
    )
  }

  const animate2 = () => {
    backgroundColor.value = withTiming(
      generateColor(),
      {
        duration: 1000,
        easing: Easing.inOut(Easing.ease)
      },
      () => {
        runOnJS(animate1)()
      }
    )
  }

  const generateColor = () => {
    let color = "#"
    for (let i = 1; i <= 6; i++) {
      color =
        color + colorSpectrum[Math.floor(Math.random() * colorSpectrum.length)]
    }
    return color
  }

  useEffect(() => {
    // animate1()
  })

  return (
    <Animated.View
      style={[styles.block, { backgroundColor: backgroundColor }]}
    />
  )
}

const styles = StyleSheet.create({
  block: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(10)
  }
})
