import React from "react";
import { bool, func } from "prop-types";

import { BlueButton } from "./styles";

export default function Button({ onClick, children, secondary }) {
  return (
    <BlueButton secondary={secondary} onClick={onClick}>
      {children}
    </BlueButton>
  );
}

Button.prototype = {
  onClick: func.isRequired,
  secondary: bool,
};

Button.defaultProps = {
  secondary: false,
};
