import React from "react";
import withStyles from "./app-header.style";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

interface AppHeaderProps {
  classes: any;
  title: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ classes, title }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(AppHeader);
