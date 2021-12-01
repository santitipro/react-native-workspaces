import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "../constants/routes";

export type MainNavigatorParamsList = {
  [Routes.Login]: undefined;
  [Routes.Register]: undefined;
};

export type NavigationProp<RouteName extends keyof MainNavigatorParamsList> =
  NativeStackNavigationProp<MainNavigatorParamsList, RouteName>;
