import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Routes } from "../constants/routes";

import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

function RootNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Register} component={Register} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
