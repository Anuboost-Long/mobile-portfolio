import { CaretRight, PenNib, Student } from "phosphor-react-native"
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import Collapsible from "@/components/collapsible/collapsible"
import Divider from "@/components/common/divider"
import Rotate from "@/animation/common/rotate"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { FontConstant } from "@/constants/font-constant"
import { UniversityEducation } from "@/constants/main-navigation/education-background"
import { GlobalStyle, globalStyle } from "@/utils/globalstyle"

export default function Curriculums() {
  const [expand, setExpand] = useState(true)

  const renderItems = (item: string) => {
    return (
      <View
        key={item}
        style={[GlobalStyle.innerRow, globalStyle.marginBottom(5)]}
      >
        <PenNib size={moderateScale(15)} color={Color.WHITE} />
        <SizedBox width={moderateScale(5)} />
        <Text style={styles.infoText}>{item}</Text>
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
          <Text style={styles.infoLabel}>Curriculums</Text>
        </View>
        <Rotate rotate={expand} rotateDegree={90}>
          <CaretRight
            size={moderateScale(20)}
            color={Color.WHITE}
            weight="bold"
          />
        </Rotate>
      </TouchableOpacity>
      <Collapsible expanded={expand}>
        <SizedBox height={moderateScale(10)} />
        <View style={[GlobalStyle.innerRow, globalStyle.paddingHorizontal(10)]}>
          <Divider
            width={moderateScale(5)}
            height={"100%"}
            backgroundColor={Color.WHITE}
            borderRadius={moderateScale(10)}
          />
          <SizedBox width={moderateScale(10)} />
          <View>
            <View>{UniversityEducation.map((item) => renderItems(item))}</View>
          </View>
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
    fontFamily: FontConstant.SEMIBOLD
  }
})
