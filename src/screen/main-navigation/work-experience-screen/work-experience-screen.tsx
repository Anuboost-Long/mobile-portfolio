import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import Container from "@/components/common/container"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { FontConstant } from "@/constants/font-constant"
import {
  ProjectProp,
  WorkingExperience
} from "@/constants/main-navigation/work-experience"
import { GlobalStyle } from "@/utils/globalstyle"

import ProjectComponent from "./components/project-component"

export default function WorkExperienceScreen() {
  const renderProject = (item: ProjectProp) => {
    return <ProjectComponent item={item} key={item.name} />
  }

  return (
    <Container additionalHeight={60} backgroundColor={Color.BLACK}>
      {WorkingExperience.map((item) => (
        <View key={`${item.company}-${item.role}`}>
          <View style={styles.jobContainer}>
            <View style={styles.header}>
              <View style={GlobalStyle.rowView}>
                <Text style={styles.roleText}>{item.role}</Text>
                <Text style={styles.periodText}>{item.period}</Text>
              </View>
              <Text style={styles.companyLabel}>{item.company}</Text>
            </View>
            {item.projects.map((project) => renderProject(project))}
          </View>
          <SizedBox height={moderateScale(10)} />
        </View>
      ))}
    </Container>
  )
}

const styles = StyleSheet.create({
  jobContainer: {
    borderWidth: 1,
    borderColor: Color.WHITE,
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(2)
  },
  header: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5)
  },
  roleText: {
    color: Color.WHITE,
    fontFamily: FontConstant.BOLD,
    fontSize: moderateScale(14)
  },
  periodText: {
    color: Color.WHITE,
    fontFamily: FontConstant.BOLD,
    fontSize: moderateScale(14)
  },
  companyLabel: {
    color: Color.WHITE,
    fontFamily: FontConstant.BLACK,
    fontSize: moderateScale(12)
  }
})
