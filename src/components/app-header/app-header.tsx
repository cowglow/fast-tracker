import React from "react";
import withStyles from "./app-header.style";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppDrawer from "../app-drawer/app-drawer";

interface AppHeaderProps {
  classes: any;
  title: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ classes, title }) => {
  const [isOpen, toggleOpen] = React.useState<boolean>(false);

  const toggleDrawer = () => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    toggleOpen(!isOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <AppDrawer open={isOpen} onClose={toggleDrawer()} />
    </>
  );
};

export default withStyles(AppHeader);
