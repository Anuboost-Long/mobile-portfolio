import React from "react";
import { StyleSheet, View } from "react-native";

import SplashAnimation from "@/animation/splash-animation/splash-animation";
import { Color } from "@/constants/color-constant";
import { ScreenConstant } from "@/constants/screen-constant";
import { navigationOperation } from "@/utils/navigation";

export default function SplashScreen() {
  const onAnimationEnded = () => {
    navigationOperation.replace({ screen: ScreenConstant.Root.MainNavigation });
  };

  return (
    <View style={styles.container}>
      <SplashAnimation onAnimationEnd={onAnimationEnded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.BLACK,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
