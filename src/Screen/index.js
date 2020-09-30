import React from "react";

import { string, node } from "prop-types";
import Header from "../Header";

//import {  } from "@material-ui/icons";

export default function Screen({ title, children }) {
  return (
    <>
      <Header title={title} />

      <article>{children}</article>
    </>
  );
}

Screen.propTypes = {
  title: string,
  children: node,
};
