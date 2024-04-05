import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";

import RootNavigation from "@/navigation/root-navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
  });
  return (
    fontsLoaded && (
      <>
        <StatusBar style="auto" />
        <RootNavigation />
      </>
    )
  );
}
