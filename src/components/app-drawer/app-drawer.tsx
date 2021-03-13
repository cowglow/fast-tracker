import React from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";

interface AppDrawerProps {
  onClose: (foo?: any) => void;
  open: boolean;
}

const AppDrawer: React.FC<AppDrawerProps> = (props) => (
  <Drawer anchor="left" {...props}>
    <Link to={"/"} onClick={props.onClose}>
      Home
    </Link>
    <Link to={"/tracker"} onClick={props.onClose}>
      Tracker
    </Link>
  </Drawer>
);

export default AppDrawer;
