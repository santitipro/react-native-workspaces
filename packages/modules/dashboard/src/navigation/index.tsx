import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Routes } from "../constants/routes";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

function RootNavigator(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.Home} component={Home} />
      <Tab.Screen name={Routes.Notifications} component={Notifications} />
      <Tab.Screen name={Routes.Settings} component={Settings} />
    </Tab.Navigator>
  );
}

export default RootNavigator;
