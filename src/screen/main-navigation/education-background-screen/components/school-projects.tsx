import {
  AppWindow,
  CaretRight,
  Circuitry,
  Student
} from "phosphor-react-native"
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import Collapsible from "@/components/collapsible/collapsible"
import Rotate from "@/animation/common/rotate"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { FontConstant } from "@/constants/font-constant"
import {
  SchoolProject,
  SchoolPropjectProp
} from "@/constants/main-navigation/education-background"
import { GlobalStyle, globalStyle } from "@/utils/globalstyle"

export default function SchoolProjects() {
  const [expand, setExpand] = useState(true)

  const renderItems = (item: SchoolPropjectProp) => {
    return (
      <View key={item.label} style={globalStyle.marginBottom(10)}>
        <View style={GlobalStyle.innerRow}>
          <AppWindow color={Color.WHITE} size={moderateScale(25)} />
          <SizedBox width={moderateScale(5)} />
          <Text style={styles.infoText}>{item.label}</Text>
        </View>
        <SizedBox height={moderateScale(5)} />
        <View style={globalStyle.paddingLeft(5)}>
          <Text style={styles.descriptionText}>
            {"   "}
            {item.description}
          </Text>
        </View>
        <View style={globalStyle.paddingLeft(20)}>
          <Text style={styles.infoText}>- TechStacks:</Text>
          {item.techStack.map((tech) => (
            <View style={GlobalStyle.innerRow} key={tech}>
              <Circuitry size={moderateScale(20)} color={Color.WHITE} />
              <SizedBox width={moderateScale(5)} />
              <Text style={styles.descriptionText}>{tech}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.uniContainer}>
      <TouchableOpacity
        style={[GlobalStyle.rowView]}
        onPress={() => setExpand(!expand)}
      >
        <View style={GlobalStyle.innerRow}>
          <Student color={Color.WHITE} size={moderateScale(25)} />
          <SizedBox width={moderateScale(5)} />
          <Text style={styles.infoLabel}>Projects</Text>
        </View>
        <Rotate rotateDegree={90} rotate={expand}>
          <CaretRight
            size={moderateScale(20)}
            color={Color.WHITE}
            weight="bold"
          />
        </Rotate>
      </TouchableOpacity>
      <Collapsible expanded={expand}>
        <SizedBox height={moderateScale(10)} />
        <View>
          <View>{SchoolProject.map((item) => renderItems(item))}</View>
        </View>
        <SizedBox height={moderateScale(10)} />
      </Collapsible>
    </View>
  )
}

const styles = StyleSheet.create({
  uniContainer: {
    width: "100%",
    alignSelf: "center",
    padding: moderateScale(10),
    borderWidth: 1,
    borderColor: Color.CHARCOAL,
    borderRadius: moderateScale(10)
  },
  infoLabel: {
    color: Color.WHITE,
    fontSize: moderateScale(16),
    fontFamily: FontConstant.BLACK
  },
  infoText: {
    color: Color.WHITE,
    fontSize: moderateScale(14),
    fontFamily: FontConstant.BOLD
  },
  descriptionText: {
    color: Color.WHITE,
    fontSize: moderateScale(13),
    fontFamily: FontConstant.MEDIUM
  }
})
