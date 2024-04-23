import { NavigationContainer } from "@react-navigation/native"
import { CardStyleInterpolators } from "@react-navigation/stack"
import React from "react"

import { Color } from "@/constants/color-constant"
import { ScreenConstant } from "@/constants/screen-constant"
import SplashScreen from "@/screen/splash-screen/splash-screen"
import { navigationRef, Stack } from "@/utils/navigation"

import MainNavigation from "./main-navigation/main-navigation"

export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: { config: { duration: 200 }, animation: "timing" },
            close: { config: { duration: 200 }, animation: "timing" }
          },
          cardStyle: {
            flex: 1,
            backgroundColor: Color.BLACK
          }
        }}
        initialRouteName={ScreenConstant.Root.SplashScreen}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          component={SplashScreen}
          name={ScreenConstant.Root.SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={MainNavigation}
          name={ScreenConstant.Root.MainNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
