import moment from "moment"
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

export default function TechStackScreen() {
  const renderStackCollection = (item: TechStackCollectionProp) => {
    return (
      <View key={item.label} style={globalStyle.paddingHorizontal(10)}>
        <Text style={styles.techHeader}> {item.label}:</Text>
        <View style={styles.techStackContainer}>
          {item.data.map((techStack) => renderTechStack(techStack))}
        </View>
        <SizedBox height={moderateScale(10)} />
      </View>
    )
  }

  const renderTechStack = (techStack: TechStackProp) => {
    const Icon = techStack.icon
    return (
      <View key={techStack.label} style={styles.techStackItem}>
        <Icon height={moderateScale(50)} width={moderateScale(50)} />
        <SizedBox height={moderateScale(5)} />
        <Text style={styles.techStackText}>{techStack.label}</Text>
        {techStack.experienced_since && (
          <Text style={styles.techStackText}>
            Days:{" "}
            {moment().diff(
              moment(techStack.experienced_since, "YYYY/MM/DD"),
              "days"
            )}
          </Text>
        )}
        {techStack.start_learning && (
          <Text style={styles.techStackText}>
            Days learned:{" "}
            {moment().diff(
              moment(techStack.start_learning, "YYYY/MM/DD"),
              "days"
            )}{" "}
          </Text>
        )}
      </View>
    )
  }

  return (
    <Container
      backgroundColor={Color.BLACK}
      additionalHeight={moderateScale(60)}
    >
      <Text style={styles.headerText}>Tech Stacks</Text>
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
  techHeader: {
    fontFamily: FontConstant.REGULAR,
    fontSize: moderateScale(18),
    color: Color.WHITE
  },
  techStackContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: Dimension.ScreenWidth
  },
  techStackItem: {
    width: (Dimension.ScreenWidth - moderateScale(30)) / 2,
    height: (Dimension.ScreenWidth - moderateScale(30)) / 2,
    backgroundColor: Color.GRAYDIM,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(10),
    marginRight: moderateScale(10),
    marginBottom: moderateScale(10)
  },
  techStackText: {
    fontSize: moderateScale(14),
    fontFamily: FontConstant.SEMIBOLD,
    color: Color.WHITE
  }
})
