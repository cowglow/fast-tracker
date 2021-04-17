import React from "react";
import App from "./app";
import theme from "../../service/theme";
import { BrowserRouter } from "react-router-dom";
import { AppStateProvider } from "../../context/app-state-context";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { Meta } from "@storybook/react";

export default {
  component: App,
  title: "Web App",
  decorators: [
    (Story: any) => (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppStateProvider>
            <CssBaseline />
            <Story />
          </AppStateProvider>
        </BrowserRouter>
      </ThemeProvider>
    ),
  ],
} as Meta;

export const AppStory = () => <App />;
