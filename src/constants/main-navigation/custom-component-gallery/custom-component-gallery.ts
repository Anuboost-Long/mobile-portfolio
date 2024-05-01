import { ScreenConstant } from "@/constants/screen-constant"
import { NavigationParam } from "@/utils/navigation"

export interface OptionsProp {
  title: string
  description: string
  colors: string[]
  navigation: NavigationParam
}

export const ShowCaseOptions: OptionsProp[] = [
  {
    title: "Animations",
    description: "A showcase gallery of the animation I have done",
    colors: ["#5F0F40", "#310E68"],
    navigation: {
      screen: ScreenConstant.CustomComponentGalleryNavigation.AnimationsScreen
    }
  },
  {
    title: "Reusable Component",
    description: "All the utility component that I have made",
    colors: ["#12100E", "#2B4162"],
    navigation: {
      screen:
        ScreenConstant.CustomComponentGalleryNavigation.ReusableComponentsScreen
    }
  },
  {
    title: "Project snapshots",
    description:
      "Some of my past experience with past company will be displayed here",
    colors: ["#170E13", "#7A7ADB"],
    navigation: {
      screen:
        ScreenConstant.CustomComponentGalleryNavigation.ProjectSnapShotsScreen
    }
  }
]
