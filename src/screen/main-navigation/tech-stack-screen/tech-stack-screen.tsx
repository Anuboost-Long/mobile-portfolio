import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import Container from "@/components/common/container"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { Dimension } from "@/constants/dimension"
import { FontConstant } from "@/constants/font-constant"
import {
  TechStackCollectionProp,
  techStackItem,
  TechStackProp
} from "@/constants/main-navigation/tect-stack"
import { globalStyle } from "@/utils/globalstyle"

import TechStack from "./components/tech-stack"

export default function TechStackScreen() {
  const renderStackCollection = (item: TechStackCollectionProp) => {
    return (
      <View key={item.label} style={globalStyle.paddingHorizontal(10)}>
        <Text style={styles.techHeader}> {item.label}</Text>
        <SizedBox height={moderateScale(10)} />
        <View style={styles.techStackContainer}>
          {item.data.map((techStack) => renderTechStack(techStack))}
        </View>
        <SizedBox height={moderateScale(10)} />
      </View>
    )
  }

  const renderTechStack = (techStack: TechStackProp) => {
    return <TechStack key={techStack.label} techStack={techStack} />
  }

  return (
    <Container
      backgroundColor={Color.BLACK}
      additionalHeight={moderateScale(60)}
    >
      <SizedBox height={moderateScale(20)} />
      <>{techStackItem.map((item) => renderStackCollection(item))}</>
    </Container>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: FontConstant.STYLE,
    fontSize: moderateScale(26),
    color: Color.WHITE,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  backdrop: {
    backgroundColor: Color.BACKDROP,
    position: "absolute",
    width: "100%",
    height: "100%"
  },

  techHeader: {
    fontFamily: FontConstant.STYLE,
    textAlign: "center",
    fontSize: moderateScale(18),
    color: Color.WHITE
  },
  techStackContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: Dimension.ScreenWidth
  }
})
