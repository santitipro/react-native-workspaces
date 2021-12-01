import React, { useEffect } from "react";
import { inject, Provider } from "mobx-react";
import { EventBus, Events } from "@eccco/events";

import stores, { AuthStore } from "./store";
import Navigator from "./navigation";
import { UserLoggedDomainEvent } from "@eccco/authentication/src/events";

type Props = {
  auth?: AuthStore;
};

function App({ auth }: Props): React.ReactElement {
  useEffect(() => {
    const onUserLoggedIn = (event: UserLoggedDomainEvent): void => {
      auth?.setIsLoggedIn({ id: event.id, email: event.email });
    };
    EventBus.subscribe(Events.USER_LOGGED, onUserLoggedIn);
  }, []);

  return (
    <Provider {...stores}>
      <Navigator />
    </Provider>
  );
}

export default inject("auth")(App);
