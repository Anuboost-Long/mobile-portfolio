import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from "react-native-reanimated"
import { moderateScale } from "react-native-size-matters"
import { Path, Svg } from "react-native-svg"

import { Color } from "@/constants/color-constant"
import { FontConstant } from "@/constants/font-constant"

const AnimatePath = Animated.createAnimatedComponent(Path)

export default function ArchProgressBar({ score = 60 }: { score: number }) {
  const progress = useSharedValue(1)
  const [dimension, setDimension] = useState({ height: 0, width: 0 })

  const adjustment = 40
  const size = dimension.width - adjustment
  const { PI, cos, sin } = Math
  const strokeWidth = 10
  const r = (size - strokeWidth) / 5
  const cx = size / 2
  const cy = size / 2
  const centerY = dimension.height - cy - 10
  const centerX = adjustment / 2
  const A = PI
  const startAngle = PI
  const endAngle = 2 * PI
  const startX = cx - r * cos(startAngle)
  const startY = -r * sin(startAngle) + cy
  const endX = cx - r * cos(endAngle)
  const endY = -r * sin(endAngle) + cy
  const d = `M ${startX} ${startY} A ${r} ${r} 0 1 0 ${endX} ${endY}`
  const circumfirence = r * A

  const animate = () => {
    progress.value = withSequence(
      withTiming(1 - score / 100, { duration: 1000, easing: Easing.linear })
    )
  }

  const animateProp = useAnimatedProps(() => {
    return {
      strokeDashoffset: circumfirence * (1 - progress.value)
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
        <Path
          stroke={Color.WHITE}
          fill={"none"}
          d={d}
          x={centerX}
          y={centerY}
          strokeWidth={strokeWidth}
        />
        <AnimatePath
          stroke={Color.CHARCOAL}
          fill={"none"}
          d={d}
          x={centerX}
          y={centerY}
          animatedProps={animateProp}
          strokeDasharray={`${circumfirence},${circumfirence}`}
          strokeWidth={strokeWidth}
        />
      </Svg>
      <Animated.Text
        style={{
          ...styles.text,
          bottom: r / 3
        }}
      >
        {progress.value}
      </Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  text: {
    position: "absolute",
    color: Color.WHITE,
    fontFamily: FontConstant.BLACK,
    fontSize: moderateScale(15),
    alignSelf: "center"
  }
})
