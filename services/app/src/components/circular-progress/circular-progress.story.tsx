import React from "react";
import CircularProgress from "./circular-progress";
import { Meta } from "@storybook/react";

export default {
  component: CircularProgress,
  title: "Components/Circular Progress",
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as Meta;

const Template = (args: any) => <CircularProgress {...args} />;

export const Story = Template.bind<any>({});
Story.args = {
  value: 10,
};
