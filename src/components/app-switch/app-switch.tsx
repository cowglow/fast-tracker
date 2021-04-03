import React from "react";
import {Route, Switch} from "react-router-dom";
import {useAppState} from "../../context/app-state-context";
import CircleProgress from "../circular-progress/circular-progress";

const AppSwitch = () => {
  const fastConfiguration = useAppState();
  return (
    <Switch>
      <Route path="/tracker">other page</Route>
      <Route path="/">
        <CircleProgress value={87} />
        <pre>{JSON.stringify(fastConfiguration, null, 2)}</pre>
      </Route>
    </Switch>
  );
};

export default AppSwitch;
