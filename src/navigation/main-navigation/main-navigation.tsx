import React from "react";

import { ScreenConstant } from "@/constants/screen-constant";
import HomeScreen from "@/screen/main-navigation/home-screen/home-screen";
import { Stack } from "@/utils/navigation";

export default function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={ScreenConstant.MainNavigation.HomeScreen}
      />
    </Stack.Navigator>
  );
}
