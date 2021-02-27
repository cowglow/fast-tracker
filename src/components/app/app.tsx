import React from "react";
import withStyles from "./app.style";
import { useAppState } from "../../context/app-state-context";

interface AppProps {
  classes: any;
}

const App: React.FC<AppProps> = ({ classes }) => {
  const fastConfiguration = useAppState();
  return (
    <div className={classes.root}>
      <header className={classes.header}>header goes here</header>
      <main className={classes.main}>
        <h1>main goes here</h1>
        <pre>{JSON.stringify(fastConfiguration, null, 2)}</pre>
      </main>
      <footer className={classes.footer}>footer goes here</footer>
    </div>
  );
};

export default withStyles(App);
