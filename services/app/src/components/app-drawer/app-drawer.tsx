import React from "react";
import { Drawer } from "@material-ui/core";
import AppDrawerNavigation from "../app-navigation/app-drawer-navigation";

interface AppDrawerProps {
  onClose: (foo?: any) => void;
  open: boolean;
}

const AppDrawer: React.FC<AppDrawerProps> = (props) => (
  <Drawer anchor="left" {...props}>
    <AppDrawerNavigation callback={props.onClose} />
  </Drawer>
);

export default AppDrawer;
