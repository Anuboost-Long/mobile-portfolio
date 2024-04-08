import React from "react";

import DrawerContent from "@/components/drawer/drawer-content";
import HomeHeader from "@/components/header/home-header";
import { Color } from "@/constants/color-constant";
import { ScreenConstant } from "@/constants/screen-constant";
import AboutMeScreen from "@/screen/main-navigation/about-me-screen/about-me-screen";
import ContactMeScreen from "@/screen/main-navigation/contact-me-screen/contact-me-screen";
import EducationBackgroundScreen from "@/screen/main-navigation/education-background-screen/education-background-screen";
import HomeScreen from "@/screen/main-navigation/home-screen/home-screen";
import TechStackScreen from "@/screen/main-navigation/tech-stack-screen/tech-stack-screen";
import WorkExperienceScreen from "@/screen/main-navigation/work-experience-screen/work-experience-screen";
import { Drawer } from "@/utils/navigation";

import CustomComponentGalleryNavigation from "./custom-component-gallery-navigation/custom-component-gallery-navigation";

export default function MainNavigation() {
  const renderHomeHeader = () => <HomeHeader />;

  const renderDrawerContent = (props: any) => <DrawerContent {...props} />;

  return (
    <Drawer.Navigator
      drawerContent={renderDrawerContent}
      initialRouteName={ScreenConstant.MainNavigation.HomeScreen}
    >
      <Drawer.Screen
        options={{
          header: renderHomeHeader,
          sceneContainerStyle: {
            backgroundColor: Color.BLACK,
          },
        }}
        component={HomeScreen}
        name={ScreenConstant.MainNavigation.HomeScreen}
      />

      <Drawer.Screen
        options={{
          header: renderHomeHeader,
          sceneContainerStyle: {
            backgroundColor: Color.BLACK,
          },
        }}
        component={AboutMeScreen}
        name={ScreenConstant.MainNavigation.AboutMeScreen}
      />
      <Drawer.Screen
        options={{
          header: renderHomeHeader,
          sceneContainerStyle: {
            backgroundColor: Color.BLACK,
          },
        }}
        component={EducationBackgroundScreen}
        name={ScreenConstant.MainNavigation.EducationBackGroundScreen}
      />
      <Drawer.Screen
        options={{
          header: renderHomeHeader,
          sceneContainerStyle: {
            backgroundColor: Color.BLACK,
          },
        }}
        component={TechStackScreen}
        name={ScreenConstant.MainNavigation.TechStackScreen}
      />
      <Drawer.Screen
        options={{
          header: renderHomeHeader,
          sceneContainerStyle: {
            backgroundColor: Color.BLACK,
          },
        }}
        component={WorkExperienceScreen}
        name={ScreenConstant.MainNavigation.WorkExperienceScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          sceneContainerStyle: {
            backgroundColor: Color.BLACK,
          },
        }}
        component={CustomComponentGalleryNavigation}
        name={ScreenConstant.MainNavigation.CustomComponentGalleryNavigation}
      />
      <Drawer.Screen
        options={{
          header: renderHomeHeader,
          sceneContainerStyle: {
            backgroundColor: Color.BLACK,
          },
        }}
        component={ContactMeScreen}
        name={ScreenConstant.MainNavigation.ContactMeScreen}
      />
    </Drawer.Navigator>
  );
}
