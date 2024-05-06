import { StyleSheet } from "react-native"
import { moderateScale } from "react-native-size-matters"

import { Color } from "@/constants/color-constant"

export const globalStyle = {
  paddingHorizontal: (value: number) => {
    return { paddingHorizontal: moderateScale(value) }
  },
  paddingLeft: (value: number) => {
    return { paddingLeft: moderateScale(value) }
  },
  marginBottom: (value: number) => {
    return { marginBottom: moderateScale(value) }
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  backDrop: {
    backgroundColor: Color.BACKDROP,
    flex: 1,
    position: "absolute"
  }
}

export const GlobalStyle = StyleSheet.create({
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  colCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  wrapRow: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  container: {
    flex: 1
  }
})
