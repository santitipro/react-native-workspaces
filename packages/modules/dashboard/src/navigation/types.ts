import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "../constants/routes";

export type MainNavigatorParamsList = {
  [Routes.Home]: undefined;
  [Routes.Notifications]: undefined;
  [Routes.Settings]: undefined;
};

export type NavigationProp<RouteName extends keyof MainNavigatorParamsList> =
  NativeStackNavigationProp<MainNavigatorParamsList, RouteName>;
