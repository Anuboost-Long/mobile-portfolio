import React, {
  forwardRef,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useState
} from "react"
import { Modal, StyleSheet, TouchableOpacity } from "react-native"
import Animated, {
  Easing,
  runOnJS,
  useSharedValue,
  withTiming
} from "react-native-reanimated"
import { moderateScale } from "react-native-size-matters"

import { Dimension } from "@/constants/dimension"
import { globalStyle } from "@/utils/globalstyle"

interface BottomSheet {
  onClose?: () => void
  onOpen?: () => void
  children: ReactElement[] | ReactElement
  duration?: number
  backgroundDismissable?: boolean
}

export type BottomSheetRef = {
  open: () => void
  close: () => void
}

const BottomSheet = forwardRef(
  (
    {
      children,
      duration = 600,
      onClose = () => {},
      onOpen = () => {},
      backgroundDismissable = true
    }: BottomSheet,
    ref
  ) => {
    const [visible, setVisible] = useState(false)
    const translateY = useSharedValue(Dimension.ScreenHeight)

    useEffect(() => {
      if (visible) {
        translateY.value = withTiming(0, {
          duration: duration,
          easing: Easing.inOut(Easing.ease)
        })
      }
    }, [visible, duration, translateY])

    const animateOpen = () => {
      onOpen()
      setVisible(true)
    }

    const animateClose = () => {
      translateY.value = withTiming(
        Dimension.ScreenHeight,
        {
          duration: duration,
          easing: Easing.inOut(Easing.ease)
        },
        () => {
          runOnJS(setVisible)(false)
          runOnJS(onClose)()
        }
      )
    }

    useImperativeHandle(ref, () => {
      return { open: animateOpen, close: animateClose }
    })

    return (
      <Modal
        transparent
        statusBarTranslucent
        animationType="fade"
        visible={visible}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={globalStyle.backDrop}
          onPress={animateClose}
          disabled={!backgroundDismissable}
        />
        <Animated.View
          style={[
            styles.container,
            { transform: [{ translateY: translateY }] }
          ]}
        >
          {children}
        </Animated.View>
      </Modal>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    maxHeight: Dimension.ScreenHeight,
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    overflow: "hidden"
  }
})

export default BottomSheet
