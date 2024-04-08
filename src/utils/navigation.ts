import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createRef } from "react";

export interface NavigationParam {
  screen: string;
  params?: any;
}

export const Stack = createStackNavigator();
export const Drawer = createDrawerNavigator();
export const BotTab = createBottomTabNavigator();

export const navigationRef = createRef<any>();

const navigate = ({ screen, params }: NavigationParam) => {
  if (!navigationRef.current) return;
  navigationRef.current.navigate(screen, params);
};

const replace = ({ screen, params }: NavigationParam) => {
  if (!navigationRef.current) return;
  navigationRef.current.dispatch(StackActions.replace(screen, params));
};

const canGoBack = () => {
  return navigationRef.current.canGoBack();
};

const reset = ({ screen, params }: NavigationParam) => {
  if (!navigationRef.current) return;
  if (canGoBack()) {
    navigationRef.current.dispatch(StackActions.popToTop());
  }
  navigationRef.current.dispatch(StackActions.replace(screen, params));
};

const goBack = () => {
  if (!navigationRef.current) return;
  navigationRef.current.goBack();
};

const openDrawer = () => {
  if (!navigationRef.current) return;
  navigationRef.current.dispatch(DrawerActions.openDrawer());
};

const closeDrawer = () => {
  if (!navigationRef.current) return;
  navigationRef.current.dispatch(DrawerActions.closeDrawer());
};

export const navigationOperation = {
  navigate,
  replace,
  canGoBack,
  reset,
  goBack,
  openDrawer,
  closeDrawer,
} as const;
