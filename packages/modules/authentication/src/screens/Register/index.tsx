import React from "react";
import { Text, View } from "react-native";

import { Routes } from "../../constants/routes";
import { NavigationProp } from "../../navigation/types";

type Props = {
  navigation: NavigationProp<Routes.Register>;
};

function Register({ navigation }: Props): JSX.Element {
  const handleLogin = () => navigation.navigate(Routes.Login);

  return (
    <View>
      <Text>Register</Text>

      <Text onPress={handleLogin}>Alerady register ? Log in</Text>
    </View>
  );
}

export default Register;
