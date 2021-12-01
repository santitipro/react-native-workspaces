import React, { useEffect, useState } from "react";
import { DomainEvent, EventBus, Events } from "@eccco/events";

import Navigator from "./navigation";

function App(): React.ReactElement {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const onUserLoggedIn = (event: DomainEvent): void => {
      console.warn(event);
      setIsLoggedIn(true);
    };
    EventBus.subscribe(Events.USER_LOGGED, onUserLoggedIn);
  }, []);

  return <Navigator />;
}

export default App;
