import React from "react"
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from "react-native"
import { moderateScale } from "react-native-size-matters"

import { Color } from "@/constants/color-constant"
import { FontConstant } from "@/constants/font-constant"

import SizedBox from "../common/sizedbox"

interface ButtonProp {
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  icon?: JSX.Element | null
  label: string
  onPress?: () => void
}
export default function Button({
  icon = null,
  label,
  containerStyle,
  textStyle,
  onPress = () => {}
}: Readonly<ButtonProp>) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      {icon && (
        <>
          {icon}
          <SizedBox width={moderateScale(5)} />
        </>
      )}
      <Text style={[styles.labelStyle, textStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: moderateScale(10),
    flex: 1,
    height: moderateScale(40),
    borderRadius: moderateScale(5),
    flexDirection: "row",
    alignItems: "center",
    shadowColor: Color.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  labelStyle: {
    color: Color.WHITE,
    fontSize: moderateScale(14),
    fontFamily: FontConstant.SEMIBOLD
  }
})
