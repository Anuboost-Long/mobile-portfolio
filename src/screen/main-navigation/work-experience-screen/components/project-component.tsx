import { CaretRight } from "phosphor-react-native"
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import Rotate from "@/animation/common/rotate"
import Collapsible from "@/components/collapsible/collapsible"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { FontConstant } from "@/constants/font-constant"
import { ProjectProp } from "@/constants/main-navigation/work-experience"
import { GlobalStyle } from "@/utils/globalstyle"

export default function ProjectComponent({
  item
}: Readonly<{ item: ProjectProp }>) {
  const [expand, setExpand] = useState(true)

  return (
    <View key={item.name} style={styles.section}>
      <TouchableOpacity
        style={GlobalStyle.rowView}
        onPress={() => setExpand(!expand)}
      >
        <Text style={styles.projectName}>{item.name}</Text>
        <Rotate rotate={expand} rotateDegree={90}>
          <CaretRight
            size={moderateScale(15)}
            color={Color.WHITE}
            weight="bold"
          />
        </Rotate>
      </TouchableOpacity>
      <Collapsible expanded={expand}>
        <SizedBox height={moderateScale(6)} />
        <Text style={styles.projectDescription}>{item.description}</Text>
        <SizedBox height={moderateScale(6)} />
        {item.duty.map((duty) => (
          <Text style={styles.projectDescription} key={`${item.name}-${duty}`}>
            + {duty}
          </Text>
        ))}
        <SizedBox height={moderateScale(6)} />
        <Text style={styles.projectName}>
          Tech stacks:{" "}
          <Text style={styles.projectDescription}>{item.techs.join(", ")}</Text>
        </Text>
      </Collapsible>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    padding: moderateScale(10),
    borderTopWidth: 1,
    borderColor: Color.WHITE
  },
  projectName: {
    color: Color.WHITE,
    fontFamily: FontConstant.BLACK,
    fontSize: moderateScale(14)
  },
  projectDescription: {
    color: Color.WHITE,
    fontFamily: FontConstant.MEDIUM,
    fontSize: moderateScale(12)
  }
})
