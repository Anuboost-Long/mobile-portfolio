import { Canvas, Path, Skia } from "@shopify/react-native-skia"
import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from "react-native-reanimated"
import { Circle } from "react-native-svg"

import { Color } from "@/constants/color-constant"

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export default function ArchProgressBar() {
  const progress = useSharedValue(0)
  const [dimension, setDimension] = useState({ height: 0, width: 0 })

  const { pi, Cos, Sin } = Math
  const strokeWidth = 10
  const center = dimension.width / 2
  const r = (dimension.width - strokeWidth) / 2 - 40
  const startAngle = Math.PI
  const endAngle = 2 * Math.PI
  const x1 = center - r * Math.cos(startAngle)
  const y1 = -r * Math.sin(startAngle) + center
  const x2 = center - r * Math.cos(endAngle)
  const y2 = -r * Math.sin(endAngle) + center
  console.log(x1, y1, x2, y2)
  const rawPath = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`
  const rawForegroundPath = `M ${x2} ${y2} A ${r} ${r} 1 0 1 ${x1} ${y1}`
  const skiaBackgroundPath = Skia.Path.MakeFromSVGString(rawPath)
  const skiaForegroundPath = Skia.Path.MakeFromSVGString(rawForegroundPath)

  const LENGTH =
    dimension.height > dimension.width ? dimension.width : dimension.height

  const RADIUS = LENGTH / (2 * Math.PI)

  const animate = () => {
    progress.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000, easing: Easing.linear }),
        withTiming(0, { duration: 0, easing: Easing.linear })
      ),
      -1
    )
  }

  const animateProp = useAnimatedProps(() => {
    return {
      strokeDashoffset: LENGTH * (1 - progress.value)
    }
  })

  useEffect(() => {
    cancelAnimation(progress)
    // animate()
  })

  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout
        setDimension({
          height: height,
          width: width
        })
      }}
    >
      <Canvas style={styles.container}>
        <Path
          path={skiaBackgroundPath}
          strokeWidth={strokeWidth}
          color={"grey"}
        />
        <Path
          path={skiaBackgroundPath}
          strokeWidth={strokeWidth}
          color={Color.WHITE}
        />
      </Canvas>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  innerContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0
  }
})
