import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { inject, observer } from "mobx-react";

import Authentication from "@eccco/authentication";
import Dashboard from "@eccco/dashboard";
import { AuthStore } from "../store";

type Props = {
  auth?: AuthStore;
};

const Stack = createNativeStackNavigator();

function RootNavigator({ auth }: Props): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth?.isAuthenticated ? (
          <Stack.Screen name="Dashboard" component={Dashboard} />
        ) : (
          <Stack.Screen name="Auth" component={Authentication} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default inject("auth")(observer(RootNavigator));
