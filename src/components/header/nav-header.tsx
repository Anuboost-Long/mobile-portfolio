import { CaretLeft } from "phosphor-react-native"
import React from "react"
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import { moderateScale } from "react-native-size-matters"

import { Color } from "@/constants/color-constant"
import { Dimension } from "@/constants/dimension"
import { FontConstant } from "@/constants/font-constant"
import { navigationOperation } from "@/utils/navigation"

import SizedBox from "../common/sizedbox"

export default function NavHeader({ name = "" }: Readonly<{ name?: string }>) {
  const openDrawer = () => {
    navigationOperation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{ width: moderateScale(30) }}
          onPress={openDrawer}
        >
          <CaretLeft size={moderateScale(20)} color={Color.WHITE} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{name}</Text>
        <SizedBox width={moderateScale(30)} />
      </View>
      <SizedBox height={moderateScale(10)} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.BACKDROP,
    position: "absolute"
  },
  innerContainer: {
    backgroundColor: Color.BLACK,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimension.ScreenWidth,
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScale(20),
    ...Platform.select({
      android: { paddingTop: StatusBar.currentHeight }
    })
  },
  headerText: {
    color: Color.WHITE,
    fontSize: moderateScale(18),
    fontFamily: FontConstant.STYLE
  }
})
