import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SplashAnimation from "@/animation/splash-animation/splash-animation";
import { Color } from "@/constants/color-constant";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <SplashAnimation />
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
