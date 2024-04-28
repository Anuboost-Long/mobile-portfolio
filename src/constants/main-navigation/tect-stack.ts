import { Heart, Medal, Star } from "phosphor-react-native"

import { IconAsset } from "@/assets/icon-assets"

export interface TechStackProp {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  label: string
  experienced_since?: string
  start_learning?: string
  color: string[]
  ratings?: {
    label: string
    rate: number
  }[]
}

export interface TechStackCollectionProp {
  label: string
  data: TechStackProp[]
}

export const RatingIcon: any = {
  Experience: Star,
  Favorite: Heart,
  Recommend: Medal
}

export const techStackItem = [
  {
    label: "Front end",
    data: [
      {
        icon: IconAsset.ReactNative,
        label: "React Native",
        experienced_since: "2022/04/20",
        color: ["#334A52", "#61DBFB"],
        ratings: [
          { label: "Experience", rate: 90 },
          { label: "Favorite", rate: 90 },
          { label: "Recommend", rate: 90 }
        ]
      },
      {
        icon: IconAsset.ReactNative,
        label: "React js",
        experienced_since: "2022/03/20",
        color: ["#003C57", "#61DBFB"],
        ratings: [
          { label: "Experience", rate: 90 },
          { label: "Favorite", rate: 70 },
          { label: "Recommend", rate: 80 }
        ]
      },
      {
        icon: IconAsset.Next,
        label: "Next js",
        experienced_since: "2022/03/20",
        color: ["#353535", "#D7D7D7"],
        ratings: [
          { label: "Experience", rate: 70 },
          { label: "Favorite", rate: 70 },
          { label: "Recommend", rate: 90 }
        ]
      },
      {
        icon: IconAsset.Vue,
        label: "Vue js",
        experienced_since: "2021/08/10",
        color: ["#34495E", "#41B883"],
        ratings: [
          { label: "Experience", rate: 90 },
          { label: "Favorite", rate: 70 },
          { label: "Recommend", rate: 90 }
        ]
      },
      {
        icon: IconAsset.Html,
        label: "Html",
        experienced_since: "2019/12/14",
        color: ["#e34c26", "#f06529"],
        ratings: [
          { label: "Experience", rate: 90 },
          { label: "Favorite", rate: 100 },
          { label: "Recommend", rate: 100 }
        ]
      },
      {
        icon: IconAsset.CSS,
        label: "Css",
        experienced_since: "2020/01/16",
        color: ["#2965f1", "#264de4"],
        ratings: [
          { label: "Experience", rate: 90 },
          { label: "Favorite", rate: 100 },
          { label: "Recommend", rate: 100 }
        ]
      },
      {
        icon: IconAsset.JS,
        label: "Java script",
        experienced_since: "2020/02/20",
        color: ["#C6B424", "#f0db4f"],
        ratings: [
          { label: "Experience", rate: 90 },
          { label: "Favorite", rate: 100 },
          { label: "Recommend", rate: 100 }
        ]
      }
    ]
  },
  {
    label: "Back end",
    data: [
      {
        icon: IconAsset.NodeJs,
        label: "Node js",
        experienced_since: "2021/02/15",
        color: ["#3c873a", "#68a063"],
        ratings: [
          { label: "Experience", rate: 70 },
          { label: "Favorite", rate: 80 },
          { label: "Recommend", rate: 80 }
        ]
      },
      {
        icon: IconAsset.ExpressJs,
        label: "Express js",
        experienced_since: "2021/02/15",
        color: ["#378B29", "#74D680"],
        ratings: [
          { label: "Experience", rate: 70 },
          { label: "Favorite", rate: 70 },
          { label: "Recommend", rate: 70 }
        ]
      }
    ]
  },
  {
    label: "Learning Tech",
    data: [
      {
        icon: IconAsset.CSharp,
        label: "C#",
        start_learning: "2024/04/01",
        color: ["#684D95", "#280068"],
        ratings: [
          { label: "Experience", rate: 20 },
          { label: "Favorite", rate: 80 },
          { label: "Recommend", rate: 100 }
        ]
      },
      {
        icon: IconAsset.DotNet,
        label: "Dot Net",
        start_learning: "2024/04/01",
        color: ["#915FCE", "#1F0060"],
        ratings: [
          { label: "Experience", rate: 20 },
          { label: "Favorite", rate: 80 },
          { label: "Recommend", rate: 100 }
        ]
      }
    ]
  }
]
