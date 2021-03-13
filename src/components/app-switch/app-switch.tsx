import React from "react";
import { Switch, Route } from "react-router-dom";
import { useAppState } from "../../context/app-state-context";

const AppSwitch = () => {
  const fastConfiguration = useAppState();
  return (
    <Switch>
      <Route path="/tracker">other page</Route>
      <Route path="/">
        <h1>main goes here</h1>
        <pre>{JSON.stringify(fastConfiguration, null, 2)}</pre>
      </Route>
    </Switch>
  );
};

export default AppSwitch;
