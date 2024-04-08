import {
  AddressBook,
  Briefcase,
  Circuitry,
  GraduationCap,
  House,
  IconProps,
  Slideshow,
  User,
} from "phosphor-react-native";
import { useMemo } from "react";

import { ScreenConstant } from "@/constants/screen-constant";
import { NavigationParam } from "@/utils/navigation";

export interface DrawerItemProp {
  label: string;
  icon: React.FC<IconProps>;
  id: string;
  navigation: NavigationParam;
}

export default function useDrawerItem() {
  const DrawerItem = useMemo(() => {
    return [
      {
        label: "Home",
        icon: House,
        id: ScreenConstant.MainNavigation.HomeScreen,
        navigation: { screen: ScreenConstant.MainNavigation.HomeScreen },
      },
      {
        label: "About Me",
        icon: User,
        id: ScreenConstant.MainNavigation.AboutMeScreen,
        navigation: { screen: ScreenConstant.MainNavigation.AboutMeScreen },
      },
      {
        label: "Education Background",
        icon: GraduationCap,
        id: ScreenConstant.MainNavigation.EducationBackGroundScreen,
        navigation: {
          screen: ScreenConstant.MainNavigation.EducationBackGroundScreen,
        },
      },
      {
        label: "Tech Stack",
        icon: Circuitry,
        id: ScreenConstant.MainNavigation.TechStackScreen,
        navigation: {
          screen: ScreenConstant.MainNavigation.TechStackScreen,
        },
      },
      {
        label: "Work Experiences",
        icon: Briefcase,
        id: ScreenConstant.MainNavigation.WorkExperienceScreen,
        navigation: {
          screen: ScreenConstant.MainNavigation.WorkExperienceScreen,
        },
      },
      {
        label: "Custom Component Gallery",
        icon: Slideshow,
        id: ScreenConstant.MainNavigation.CustomComponentGalleryNavigation,
        navigation: {
          screen:
            ScreenConstant.MainNavigation.CustomComponentGalleryNavigation,
        },
      },
      {
        label: "Contact Me",
        icon: AddressBook,
        id: ScreenConstant.MainNavigation.ContactMeScreen,
        navigation: { screen: ScreenConstant.MainNavigation.ContactMeScreen },
      },
    ];
  }, []);

  return { DrawerItem };
}
