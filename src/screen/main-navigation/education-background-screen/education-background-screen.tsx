import { Medal } from "phosphor-react-native"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import Container from "@/components/common/container"
import Divider from "@/components/common/divider"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { FontConstant } from "@/constants/font-constant"
import { HighSchoolEducation } from "@/constants/main-navigation/education-background"
import { GlobalStyle, globalStyle } from "@/utils/globalstyle"

import Curriculums from "./components/curriculums"
import SchoolProjects from "./components/school-projects"

export default function EducationBackgroundScreen() {
  return (
    <Container
      additionalHeight={moderateScale(60)}
      backgroundColor={Color.BLACK}
    >
      <Text style={styles.headerText}>Highschool</Text>
      <SizedBox height={moderateScale(10)} />
      <View style={globalStyle.paddingHorizontal(20)}>
        {HighSchoolEducation.map((item) => {
          return (
            <View key={item.label}>
              <Divider
                backgroundColor={Color.WHITE}
                width={"100%"}
                height={moderateScale(1)}
              />
              <SizedBox height={moderateScale(10)} />
              <Text style={styles.educationLabel}>{item.label}</Text>
              <Text style={styles.schoolLabel}>
                {item.school} ({item.year})
              </Text>
              <View style={GlobalStyle.innerRow}>
                <Medal color={Color.WHITE} size={moderateScale(20)} />
                <Text style={styles.schoolInformation}>{item.achievement}</Text>
              </View>
              <SizedBox height={moderateScale(10)} />
            </View>
          )
        })}
      </View>
      <Text style={styles.headerText}>University</Text>
      <View style={globalStyle.paddingHorizontal(20)}>
        <SizedBox height={moderateScale(10)} />
        <Text style={styles.educationLabel}>Software engineering</Text>
        <Text style={styles.schoolLabel}>
          Kirirom institute of technology (2019-2023)
        </Text>

        <SizedBox height={moderateScale(10)} />
        <Curriculums />
        <SizedBox height={moderateScale(10)} />
        <SchoolProjects />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: FontConstant.STYLE,
    fontSize: moderateScale(26),
    color: Color.WHITE,
    textAlign: "center"
  },
  educationLabel: {
    color: Color.WHITE,
    fontSize: moderateScale(18),
    fontFamily: FontConstant.BLACK
  },
  schoolLabel: {
    color: Color.WHITE,
    fontSize: moderateScale(16),
    fontFamily: FontConstant.SEMIBOLD
  },
  schoolInformation: {
    color: Color.WHITE,
    fontSize: moderateScale(12),
    fontFamily: FontConstant.SEMIBOLD
  }
})
