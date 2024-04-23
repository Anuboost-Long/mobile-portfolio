import { CaretRight } from "phosphor-react-native"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { Dimension } from "@/constants/dimension"
import { FontConstant } from "@/constants/font-constant"
import { TechStackProp } from "@/constants/main-navigation/tect-stack"
import { GlobalStyle, globalStyle } from "@/utils/globalstyle"

export default function TechStack({
  techStack
}: Readonly<{ techStack: TechStackProp }>) {
  const Icon = techStack.icon

  const renderRatings = (item: { label: string; rate: number }) => {
    return (
      <View
        style={{
          ...globalStyle.paddingHorizontal(10),
          marginBottom: moderateScale(5)
        }}
        key={item.label}
      >
        <View style={GlobalStyle.rowView}>
          <Text style={styles.labelText}>{item.label}</Text>
          <Text style={styles.labelText}>{item.rate}/100</Text>
        </View>
        <View style={styles.progressBar}>
          <View
            style={{
              ...styles.progress,
              width: `${item.rate}%`,
              backgroundColor: techStack.color
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <View key={techStack.label} style={styles.techStackItem}>
      <View
        style={{
          ...styles.techHeaderContainer,
          backgroundColor: techStack.color
        }}
      />
      <View style={{ ...styles.iconContainer, borderColor: techStack.color }}>
        <Icon height={moderateScale(40)} width={moderateScale(40)} />
      </View>
      <SizedBox height={moderateScale(25)} />
      <Text style={styles.techStackLabel}>{techStack.label}</Text>
      {techStack.ratings?.map((item) => renderRatings(item))}
      <SizedBox height={moderateScale(10)} />
      <TouchableOpacity style={styles.learnContainer}>
        <Text style={styles.learnMore}>Learn More</Text>
        <CaretRight size={moderateScale(10)} color={Color.LINK} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  techHeaderContainer: {
    width: "100%",
    height: moderateScale(90),
    borderBottomWidth: 2,
    borderColor: Color.WHITE
  },
  techStackText: {
    fontSize: moderateScale(12),
    fontFamily: FontConstant.REGULAR,
    color: Color.BLACK,
    textAlign: "center"
  },
  techStackLabel: {
    fontSize: moderateScale(16),
    fontFamily: FontConstant.BOLD,
    color: Color.BLACK,
    textAlign: "center"
  },
  iconContainer: {
    top: moderateScale(60),
    borderWidth: 2,
    backgroundColor: Color.WHITE,
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: moderateScale(30),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    alignSelf: "center"
  },
  techStackItem: {
    overflow: "hidden",
    width: (Dimension.ScreenWidth - moderateScale(30)) / 2,
    backgroundColor: Color.WHITE,
    borderWidth: 2,
    borderColor: Color.WHITE,
    borderRadius: moderateScale(10),
    marginRight: moderateScale(10),
    marginBottom: moderateScale(10)
  },
  learnMore: {
    fontSize: moderateScale(12),
    fontFamily: FontConstant.REGULAR,
    color: Color.LINK,
    textAlign: "center"
  },
  learnContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    paddingRight: moderateScale(5),
    marginBottom: moderateScale(5)
  },
  labelText: {
    color: Color.BLACK,
    fontFamily: FontConstant.BOLD,
    fontSize: moderateScale(10)
  },
  progressBar: {
    backgroundColor: Color.EXTRALIGHT,
    height: moderateScale(10),
    borderRadius: moderateScale(10),
    overflow: "hidden"
  },
  progress: {
    height: "100%"
  }
})
