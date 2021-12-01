import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

function RootNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
