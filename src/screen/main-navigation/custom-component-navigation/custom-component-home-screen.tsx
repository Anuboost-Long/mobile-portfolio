import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import DotLoading from "@/animation/loading/dot/dot-loading"
import Container from "@/components/common/container"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { Dimension } from "@/constants/dimension"
import { FontConstant } from "@/constants/font-constant"
import { GlobalStyle } from "@/utils/globalstyle"

export default function CustomComponentGalleryHomeScreen() {
  return (
    <Container backgroundColor={Color.BLACK} additionalHeight={60}>
      <SizedBox height={moderateScale(20)} />
      <TouchableOpacity>
        <LinearGradient
          style={[styles.optionContainer, GlobalStyle.rowView]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          colors={["#5F0F40", "#310E68"]}
        >
          <View>
            <Text style={styles.headerText}>Animations</Text>
            <Text style={styles.description}>
              A showcase gallery of the animation I have done
            </Text>
          </View>
          <DotLoading />
        </LinearGradient>
      </TouchableOpacity>
    </Container>
  )
}

const styles = StyleSheet.create({
  optionContainer: {
    width: Dimension.ScreenWidth - moderateScale(20),
    backgroundColor: Color.WHITE,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    height: moderateScale(100),
    alignSelf: "center"
  },
  headerText: {
    fontSize: moderateScale(16),
    fontFamily: FontConstant.BLACK,
    color: Color.WHITE
  },
  description: {
    fontSize: moderateScale(12),
    fontFamily: FontConstant.SEMIBOLD,
    color: Color.WHITE,
    width: "80%"
  }
})
