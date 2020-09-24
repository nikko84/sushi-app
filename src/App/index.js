import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import Header from "../Header";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="sushi trop cool" />
      <article>Main</article>
    </ThemeProvider>
  );
}
