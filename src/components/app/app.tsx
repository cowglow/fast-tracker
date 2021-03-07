import React from "react";
import withStyles from "./app.style";
import { useAppState } from "../../context/app-state-context";
import Container from "@material-ui/core/Container";
import AppHeader from "../app-header/app-header";

interface AppProps {
  classes: any;
}

const App: React.FC<AppProps> = ({ classes }) => {
  const fastConfiguration = useAppState();
  return (
    <Container className={classes.root}>
      <header className={classes.header}>
          <AppHeader title="Fast Tracker"/>
      </header>
      <main className={classes.main}>
        <h1>main goes here</h1>
        <pre>{JSON.stringify(fastConfiguration, null, 2)}</pre>
      </main>
      <footer className={classes.footer}>footer goes here</footer>
    </Container>
  );
};

export default withStyles(App);
