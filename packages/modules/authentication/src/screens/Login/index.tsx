import React from "react";
import { View, Button, Text } from "react-native";

import { EventBus, DomainEvent, Events } from "@eccco/events";
import { NavigationProp } from "../../navigation/types";
import { Routes } from "../../constants/routes";

type Props = {
  navigation: NavigationProp<Routes.Login>;
};

function Login({ navigation }: Props): JSX.Element {
  const handleSubmit = (): void => {
    EventBus.publish(
      new DomainEvent({
        eventName: Events.USER_LOGGED,
        payload: { email: "test@mailinator.com" },
      })
    );
  };

  const handleRegister = () => navigation.navigate(Routes.Register);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: "90%",
            height: 250,
            borderWidth: 1,
            borderColor: "grey",
          }}
        ></View>
      </View>
      <View style={{ margin: 10 }}>
        <Text
          style={{ textAlign: "center", marginBottom: 20 }}
          onPress={handleRegister}
        >
          Not have account ? Register
        </Text>
        <Button title="Log In" onPress={handleSubmit} />
      </View>
    </View>
  );
}

export default Login;
