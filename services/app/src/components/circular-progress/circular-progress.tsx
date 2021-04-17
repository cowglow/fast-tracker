import React from "react";
import withStyles from "./circular-progress.style";

interface CircleProgressProps {
  classes: any;
  value: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ classes, value }) => {
  const size = 26;
  const strokeWidth = 5;
  const center = size / 2;
  const radius = size / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={classes.root}>
      <svg
        className={classes.svgWrapper}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={classes.bgCircle}
          cx={center}
          cy={center}
          r={radius}
        />
        <circle
          className={classes.circle}
          cx={center}
          cy={center}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

export default withStyles(CircleProgress);
