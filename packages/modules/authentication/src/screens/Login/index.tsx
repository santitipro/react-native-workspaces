import React from "react";
import { View, Button } from "react-native";

import { EventBus, DomainEvent, Events } from "@eccco/events";

function Login(): JSX.Element {
  const handleSubmit = (): void => {
    EventBus.publish(
      new DomainEvent({
        eventName: Events.USER_LOGGED,
        payload: { email: "test@mailinator.com" },
      })
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "flex-end", margin: 10 }}>
        <Button title="Logged In!" onPress={handleSubmit} />
      </View>
    </View>
  );
}

export default Login;
