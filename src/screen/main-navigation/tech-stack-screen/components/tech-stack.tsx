import { LinearGradient } from "expo-linear-gradient"
import { Info } from "phosphor-react-native"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { Dimension } from "@/constants/dimension"
import { FontConstant } from "@/constants/font-constant"
import {
  RatingIcon,
  TechStackProp
} from "@/constants/main-navigation/tect-stack"
import { GlobalStyle } from "@/utils/globalstyle"

export default function TechStack({
  techStack
}: Readonly<{ techStack: TechStackProp }>) {
  const Icon = techStack.icon

  const renderRatings = (item: { label: string; rate: number }) => {
    const RateIcon = RatingIcon[item.label]
    return (
      <View style={styles.ratingContainer} key={item.label}>
        <RateIcon color={Color.WHITE} size={moderateScale(20)} />
        <SizedBox height={moderateScale(5)} />
        <Text style={styles.ratingText}>
          {item.rate}
          <Text style={styles.topScore}> /100</Text>
        </Text>
      </View>
    )
  }

  return (
    <LinearGradient
      key={techStack.label}
      style={[styles.techStackItem, GlobalStyle.rowView]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0.9, y: 1 }}
      colors={techStack.color}
    >
      <View style={GlobalStyle.colCenter}>
        <View style={styles.iconContainer}>
          <Icon height={moderateScale(40)} width={moderateScale(40)} />
        </View>
        <SizedBox height={moderateScale(5)} />
        <Text style={styles.labelText}>{techStack.label}</Text>
      </View>
      <View style={GlobalStyle.innerRow}>
        {techStack.ratings?.map((item) => renderRatings(item))}
      </View>
      <TouchableOpacity onPress={(e) => console.log(e.nativeEvent)}>
        <Info color={Color.WHITE} size={moderateScale(20)} weight="bold" />
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  techStackItem: {
    overflow: "hidden",
    alignSelf: "center",
    width: Dimension.ScreenWidth - moderateScale(20),
    paddingHorizontal: moderateScale(10),
    height: moderateScale(100),
    backgroundColor: Color.WHITE,
    borderColor: Color.WHITE,
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10)
  },
  iconContainer: {
    backgroundColor: Color.WHITE,
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: moderateScale(20),
    justifyContent: "center",
    alignItems: "center"
  },
  labelText: {
    color: Color.WHITE,
    fontFamily: FontConstant.BOLD,
    fontSize: moderateScale(10)
  },
  ratingContainer: {
    width: moderateScale(55),
    height: moderateScale(55),
    marginRight: moderateScale(5),
    justifyContent: "center",
    alignItems: "center"
  },
  ratingText: {
    color: Color.WHITE,
    fontSize: moderateScale(14),
    fontFamily: FontConstant.BOLD
  },
  topScore: {
    color: Color.WHITE,
    fontSize: moderateScale(10),
    fontFamily: FontConstant.BLACK
  }
})
