import { Dimensions } from "react-native";

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;
const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

export const Dimension = {
  ScreenHeight,
  ScreenWidth,
  WindowHeight,
  WindowWidth,
} as const;
