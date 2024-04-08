import {
  Briefcase,
  Circuitry,
  GraduationCap,
  IconProps,
  Slideshow,
  User,
} from "phosphor-react-native";
import { useMemo } from "react";

import { IconAsset } from "@/assets/icon-assets";
import { ScreenConstant } from "@/constants/screen-constant";
import { NavigationParam } from "@/utils/navigation";

export interface TopicsProp {
  label: string;
  icon: React.FC<IconProps>;
  id: string;
  navigation: NavigationParam;
}

export interface HobbieProp {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  id: string;
  link?: string;
}

export default function useTopicsItem() {
  const topics: TopicsProp[] = useMemo(() => {
    return [
      {
        label: "About Me",
        icon: User,
        id: ScreenConstant.MainNavigation.AboutMeScreen,
        navigation: { screen: ScreenConstant.MainNavigation.AboutMeScreen },
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
        label: "Education Background",
        icon: GraduationCap,
        id: ScreenConstant.MainNavigation.EducationBackGroundScreen,
        navigation: {
          screen: ScreenConstant.MainNavigation.EducationBackGroundScreen,
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
    ];
  }, []);

  const hobbie: HobbieProp[] = useMemo(() => {
    return [
      {
        label: "Anime",
        id: "anime",
        icon: IconAsset.Anime,
        link: "https://www.youtube.com/watch?v=RoAPuxzfad4&list=PLwLSw1_eDZl3_YNRvXA7O89pNPsj1WIkb",
      },
      {
        label: "Speedrun",
        id: "game",
        icon: IconAsset.Game,
        link: "https://www.youtube.com/watch?v=Fzoc5eHUHjw",
      },
      {
        label: "Valorant",
        id: "valorant",
        icon: IconAsset.Valorant,
        link: "https://www.youtube.com/watch?v=w6QZStIp_Z0",
      },
      {
        label: "WWE",
        id: "wwe",
        icon: IconAsset.WWE,
        link: "https://www.youtube.com/watch?v=i7NcPAnnxDk",
      },
    ];
  }, []);

  return { topics, hobbie };
}
