import React from "react";
import { Link } from "react-router-dom";
import withStyles from "./app-drawer-navigation.style";
import MenuItem from "@material-ui/core/MenuItem";

interface AppDrawerNavigationProps {
  classes: any;
  callback: (foo?: any) => void;
}

const AppDrawerNavigation: React.FC<AppDrawerNavigationProps> = ({
  classes,
  callback,
}) => {
  return (
    <div className={classes.root}>
      <Link to={"/"} onClick={callback} component={MenuItem}>
        Home
      </Link>
      <Link to={"/tracker"} onClick={callback} component={MenuItem}>
        Tracker
      </Link>
    </div>
  );
};

export default withStyles(AppDrawerNavigation);
