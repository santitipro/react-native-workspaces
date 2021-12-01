import React from "react";
import { Provider } from "mobx-react";

import stores from "./store";
import App from "./app";

function RootConfig(): React.ReactElement {
  return (
    <Provider {...stores}>
      <App />
    </Provider>
  );
}

export default RootConfig;
