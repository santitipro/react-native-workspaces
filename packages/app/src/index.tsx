import React, { useEffect } from "react";
import { DomainEvent, EventBus, Events } from "@eccco/events";
import Authentication from "@eccco/authentication";

function App(): React.ReactElement {
  useEffect(() => {
    const onUserLoggedIn = (event: DomainEvent): void => {
      console.warn(event);
    };
    EventBus.subscribe(Events.USER_LOGGED, onUserLoggedIn);
  }, []);

  return <Authentication />;
}

export default App;
