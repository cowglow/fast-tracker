import React from "react";
import withStyles from "./app.style";
import Container from "@material-ui/core/Container";
import AppHeader from "../app-header/app-header";
import AppSwitch from "../app-switch/app-switch";

interface AppProps {
  classes: any;
}

const App: React.FC<AppProps> = ({ classes }) => (
  <Container className={classes.root}>
    <header className={classes.header}>
      <AppHeader title="Fast Tracker" />
    </header>
    <main className={classes.main}>
      <AppSwitch />
    </main>
    <footer className={classes.footer}>footer goes here</footer>
  </Container>
);

export default withStyles(App);
