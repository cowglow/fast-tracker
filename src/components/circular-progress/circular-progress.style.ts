import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  svgWrapper: {
    margin: "0 auto",
  },
  bgCircle: {
    fill: "none",
    stroke: theme.palette.primary.main,
    strokeWidth: 6,
  },
  circle: {
    fill: "none",
    stroke: theme.palette.primary.light,
  },
}));
