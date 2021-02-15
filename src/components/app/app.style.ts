import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles((theme) => ({
  root: {
    border: "thick solid purple",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    border: "thin solid red",
  },
  main: {
    border: "thin solid green",
    flex: "1 0 auto",
  },
  footer: {
    border: "thin solid gold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
