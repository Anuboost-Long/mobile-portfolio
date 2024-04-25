import React, { ReactNode, useEffect } from "react"
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated"

import { ANIMATION_DURATION } from "../../components/collapsible/presets/collapsible-presets"

interface RotateProp {
  children: ReactNode | ReactNode[]
  rotate?: boolean
  rotateDegree: number
}

export default function Rotate({ rotate, children, rotateDegree }: RotateProp) {
  const progress = useSharedValue(0)

  useEffect(() => {
    handleRotate()
  })

  const handleRotate = () => {
    if (rotate) {
      progress.value = withTiming(1, {
        duration: ANIMATION_DURATION,
        easing: Easing.inOut(Easing.cubic)
      })
    } else {
      progress.value = withTiming(0, {
        duration: ANIMATION_DURATION,
        easing: Easing.inOut(Easing.cubic)
      })
    }
  }

  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(progress.value, [0, 1], [0, rotateDegree])}deg`
        }
      ]
    }
  })

  return <Animated.View style={rotateStyle}>{children}</Animated.View>
}
