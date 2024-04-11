import { IconAsset } from "@/assets/icon-assets";

export interface TechStackProp {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  experienced_since?: string;
  start_learning?: string;
}

export interface TechStackCollectionProp {
  label: string;
  data: TechStackProp[];
}

export const techStackItem = [
  {
    label: "Front end",
    data: [
      {
        icon: IconAsset.ReactNative,
        label: "React Native",
        experienced_since: "2022/04/20",
      },
      {
        icon: IconAsset.ReactNative,
        label: "React js",
        experienced_since: "2022/03/20",
      },
      { icon: IconAsset.Vue, label: "Vue js", experienced_since: "2021/08/10" },
      { icon: IconAsset.Html, label: "Html", experienced_since: "2019/12/14" },
      { icon: IconAsset.CSS, label: "Css", experienced_since: "2020/01/16" },
      {
        icon: IconAsset.JS,
        label: "Java script",
        experienced_since: "2020/02/20",
      },
    ],
  },
  {
    label: "Back end",
    data: [
      {
        icon: IconAsset.NodeJs,
        label: "Node js",
        experienced_since: "2021/02/15",
      },
      {
        icon: IconAsset.ExpressJs,
        label: "Express js",
        experienced_since: "2021/02/15",
      },
    ],
  },
  {
    label: "Learning Tech",
    data: [
      { icon: IconAsset.CSharp, label: "C#", start_learning: "2024/04/01" },
      {
        icon: IconAsset.DotNet,
        label: "Dot Net",
        start_learning: "2024/04/01",
      },
    ],
  },
];
