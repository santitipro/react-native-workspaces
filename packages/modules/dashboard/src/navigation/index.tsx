import React from "react";

import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Settings from "../screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function RootNavigator(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Notifications} />
      <Tab.Screen name="Notifications" component={Settings} />
    </Tab.Navigator>
  );
}

export default RootNavigator;
