import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { moderateScale } from "react-native-size-matters"

import Container from "@/components/common/container"
import SizedBox from "@/components/common/sizedbox"
import { Color } from "@/constants/color-constant"
import { Dimension } from "@/constants/dimension"
import { FontConstant } from "@/constants/font-constant"
import {
  AnimationProp,
  Animations,
  AnimationsProp
} from "@/constants/main-navigation/custom-component-gallery/animations"
import { GlobalStyle } from "@/utils/globalstyle"

export default function AnimationsScreen() {
  const [currentAnimation, setCurrentAnimation] = useState(
    Animations[0].data[0]
  )
  const AnimationComponent = currentAnimation.component

  const renderAnimationCollection = (collection: AnimationsProp) => {
    return (
      <View key={collection.label}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLabel}>{collection.label}</Text>
        </View>
        <SizedBox height={moderateScale(10)} />
        <View style={GlobalStyle.wrapRow}>
          {collection.data.map((animation) => renderAnimations(animation))}
        </View>
      </View>
    )
  }

  const renderAnimations = (animation: AnimationProp) => {
    const Component = animation.component
    return (
      <TouchableOpacity
        key={animation.label}
        style={styles.animationContainer}
        onPress={() => setCurrentAnimation(animation)}
      >
        <Component dotType={animation.type} />
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{animation.label}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <Container additionalHeight={60} backgroundColor={Color.BLACK}>
      <SizedBox height={moderateScale(10)} />
      <View style={styles.upperContainer}>
        <AnimationComponent dotType={currentAnimation.type} />
      </View>
      <SizedBox height={moderateScale(10)} />
      <>
        {Animations.map((collection) => renderAnimationCollection(collection))}
      </>
    </Container>
  )
}

const styles = StyleSheet.create({
  upperContainer: {
    width: Dimension.ScreenWidth - moderateScale(20),
    height: (Dimension.ScreenWidth - moderateScale(20)) / 2,
    borderWidth: 1,
    borderRadius: moderateScale(10),
    borderColor: Color.WHITE,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  headerContainer: {
    width: Dimension.ScreenWidth,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    backgroundColor: Color.WHITE
  },
  headerLabel: {
    fontSize: moderateScale(14),
    fontFamily: FontConstant.SEMIBOLD,
    color: Color.BLACK
  },
  animationContainer: {
    width: (Dimension.ScreenWidth - moderateScale(30)) / 2,
    height: (Dimension.ScreenWidth - moderateScale(40)) / 3,
    borderWidth: 1,
    borderColor: Color.WHITE,
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(10),
    marginBottom: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  labelText: {
    fontSize: moderateScale(10),
    fontFamily: FontConstant.BLACK,
    color: Color.WHITE
  },
  labelContainer: {
    backgroundColor: Color.CHARCOAL,
    paddingVertical: moderateScale(3),
    paddingHorizontal: moderateScale(5),
    borderRadius: moderateScale(10),
    position: "absolute",
    top: 5,
    left: 5
  }
})
