import React from "react";
import withStyles from "./app.style";

interface AppProps {
  classes: any;
}

const App: React.FC<AppProps> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <header className={classes.header}>header goes here</header>
      <main className={classes.main}>main goes here</main>
      <footer className={classes.footer}>footer goes here</footer>
    </div>
  );
};

export default withStyles(App);
