import { DOT_TYPE } from "@/animation/loading/dot/constant/dot-animation"
import DotLoading from "@/animation/loading/dot/dot-loading"

export interface AnimationsProp {
  label: string
  data: AnimationProp[]
}

export interface AnimationProp {
  label: string
  component: any
  type: string
}
export const Animations: AnimationsProp[] = [
  {
    label: "Loading Animation",
    data: [
      {
        label: "Elastic Dots",
        component: DotLoading,
        type: DOT_TYPE.dot_elastic
      },
      {
        label: "Opacity Dots",
        component: DotLoading,
        type: DOT_TYPE.dot_opacity
      },
      {
        label: "Rising Dots",
        component: DotLoading,
        type: DOT_TYPE.dot_rising
      },
      {
        label: "Falling Dots",
        component: DotLoading,
        type: DOT_TYPE.dot_falling
      },
      {
        label: "Collision Dots",
        component: DotLoading,
        type: DOT_TYPE.dot_collision
      },
      {
        label: "Stretching Dots",
        component: DotLoading,
        type: DOT_TYPE.dot_stretching
      }
    ]
  }
]
