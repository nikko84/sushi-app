import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreen from "../HomeScreen";
import BasketScreen from "../BasketScreen";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/basket" component={BasketScreen} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
