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
import { Circle, Svg } from "react-native-svg"

import { Color } from "@/constants/color-constant"

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export default function CircleProgressBar() {
  const progress = useSharedValue(0)
  const [dimension, setDimension] = useState({ height: 0, width: 0 })

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
    animate()
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
      <Svg>
        <Circle
          r={RADIUS}
          stroke={Color.CHARCOAL}
          strokeWidth={LENGTH / 20}
          cx={dimension.width / 2}
          cy={dimension.height / 2}
          fill={"transparent"}
        />
        <AnimatedCircle
          r={RADIUS}
          stroke={Color.WHITE}
          strokeWidth={LENGTH / 40}
          cx={dimension.width / 2}
          cy={dimension.height / 2}
          fill={"transparent"}
          strokeDasharray={LENGTH}
          animatedProps={animateProp}
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  innerContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0
  }
})
