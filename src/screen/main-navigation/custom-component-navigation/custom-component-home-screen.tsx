import { LinearGradient } from "expo-linear-gradient"
import { DiamondsFour } from "phosphor-react-native"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import Container from "@/components/common/container"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { Dimension } from "@/constants/dimension"
import { FontConstant } from "@/constants/font-constant"
import {
  OptionsProp,
  ShowCaseOptions
} from "@/constants/main-navigation/custom-component-gallery/custom-component-gallery"
import { GlobalStyle, globalStyle } from "@/utils/globalstyle"
import { navigationOperation, NavigationParam } from "@/utils/navigation"

export default function CustomComponentGalleryHomeScreen() {
  const navigate = (navigation: NavigationParam) => {
    navigationOperation.navigate(navigation)
  }

  const renderOptions = (item: OptionsProp) => {
    return (
      <TouchableOpacity
        key={item.title}
        style={globalStyle.marginBottom(20)}
        onPress={() => navigate(item.navigation)}
      >
        <LinearGradient
          style={[styles.optionContainer, GlobalStyle.rowView]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          colors={item.colors}
        >
          <View style={styles.flex}>
            <Text style={styles.headerText}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <DiamondsFour
            color={Color.WHITE}
            size={moderateScale(25)}
            style={styles.iconShadow}
          />
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  return (
    <Container backgroundColor={Color.BLACK} additionalHeight={60}>
      <SizedBox height={moderateScale(20)} />
      <>{ShowCaseOptions.map((item) => renderOptions(item))}</>
    </Container>
  )
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
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
  },
  iconShadow: {
    shadowColor: Color.WHITE,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5
  }
})
