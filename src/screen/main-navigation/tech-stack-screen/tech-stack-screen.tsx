import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import Container from "@/components/common/container"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { FontConstant } from "@/constants/font-constant"
import {
  TechStackCollectionProp,
  techStackItem,
  TechStackProp
} from "@/constants/main-navigation/tect-stack"

import TechStack from "./components/tech-stack"

export default function TechStackScreen() {
  const renderStackCollection = (item: TechStackCollectionProp) => {
    return (
      <View key={item.label}>
        <View style={styles.sectionContainer}>
          <Text style={styles.techHeader}> {item.label}</Text>
        </View>
        <SizedBox height={moderateScale(10)} />
        {item.data.map((techStack) => renderTechStack(techStack))}
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
  techHeader: {
    fontFamily: FontConstant.STYLE,
    textAlign: "center",
    fontSize: moderateScale(18),
    color: Color.WHITE
  },
  sectionContainer: {
    width: "100%",
    backgroundColor: Color.CHARCOAL,
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(10)
  }
})
