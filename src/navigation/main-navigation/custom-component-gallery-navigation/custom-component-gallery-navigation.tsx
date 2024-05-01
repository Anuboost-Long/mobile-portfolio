import React from "react"

import HomeHeader from "@/components/header/home-header"
import NavHeader from "@/components/header/nav-header"
import { Color } from "@/constants/color-constant"
import { ScreenConstant } from "@/constants/screen-constant"
import AnimationsScreen from "@/screen/main-navigation/custom-component-navigation/animations-screen/animation-screen"
import CustomComponentGalleryHomeScreen from "@/screen/main-navigation/custom-component-navigation/custom-component-home-screen"
import ProjectSnapShotsScreens from "@/screen/main-navigation/custom-component-navigation/project-snapshots-screen/project-snapshots-screen"
import ReusableComponentScreen from "@/screen/main-navigation/custom-component-navigation/reusable-component-screen/reusable-component-screen"
import { Stack } from "@/utils/navigation"

export default function CustomComponentGalleryNavigation() {
  const renderNavigationHeader = (props: any) => {
    const name = props.options.title
    return <NavHeader name={name} />
  }

  const renderHomeHeader = () => {
    return <HomeHeader />
  }

  return (
    <Stack.Navigator
      initialRouteName={
        ScreenConstant.CustomComponentGalleryNavigation
          .CustomComponentGalleryHomeScreen
      }
      screenOptions={{
        cardStyle: {
          backgroundColor: Color.BLACK
        },
        header: renderNavigationHeader
      }}
    >
      <Stack.Screen
        options={{ header: renderHomeHeader }}
        component={CustomComponentGalleryHomeScreen}
        name={
          ScreenConstant.CustomComponentGalleryNavigation
            .CustomComponentGalleryHomeScreen
        }
      />
      <Stack.Screen
        component={AnimationsScreen}
        options={{ title: "Animations" }}
        name={ScreenConstant.CustomComponentGalleryNavigation.AnimationsScreen}
      />
      <Stack.Screen
        component={ReusableComponentScreen}
        options={{ title: "Reusable Components" }}
        name={
          ScreenConstant.CustomComponentGalleryNavigation
            .ReusableComponentsScreen
        }
      />
      <Stack.Screen
        component={ProjectSnapShotsScreens}
        options={{ title: "Project SnapShots" }}
        name={
          ScreenConstant.CustomComponentGalleryNavigation.ProjectSnapShotsScreen
        }
      />
    </Stack.Navigator>
  )
}
