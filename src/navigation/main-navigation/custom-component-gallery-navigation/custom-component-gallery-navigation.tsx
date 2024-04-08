import React from "react";

import HomeHeader from "@/components/header/home-header";
import { Color } from "@/constants/color-constant";
import { ScreenConstant } from "@/constants/screen-constant";
import CustomComponentGalleryHomeScreen from "@/screen/main-navigation/custom-component-navigation/custom-component-home-screen";
import { Stack } from "@/utils/navigation";

export default function CustomComponentGalleryNavigation() {
  const renderHomeHeader = () => <HomeHeader />;

  return (
    <Stack.Navigator
      initialRouteName={
        ScreenConstant.CustomComponentGalleryNavigation
          .CustomComponentGalleryHomeScreen
      }
      screenOptions={{
        cardStyle: {
          backgroundColor: Color.BLACK,
        },
        header: renderHomeHeader,
      }}
    >
      <Stack.Screen
        component={CustomComponentGalleryHomeScreen}
        name={
          ScreenConstant.CustomComponentGalleryNavigation
            .CustomComponentGalleryHomeScreen
        }
      />
    </Stack.Navigator>
  );
}
