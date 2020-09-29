import React from "react";
import { Input, IconButton, Grid } from "@material-ui/core";
import { IndeterminateCheckBox, AddBox } from "@material-ui/icons";
import { func, number } from "prop-types";

import config from "react-global-configuration";

const Button = ({ onClick, label, disabled, Icon }) => {
  return (
    <IconButton aria-label={label} onClick={onClick} disabled={disabled}>
      <Icon fontSize="inherit" />
    </IconButton>
  );
};

export default function QuantityInput({ quantity, inc, dec, set }) {
  const { max, min } = config.get("quantity");

  const isDecable = quantity > min;
  const isUpgrade = quantity < max;
  return (
    <Grid container>
      <Grid item xs={4}>
        {dec && (
          <Button
            label="delete"
            onClick={() => dec()}
            Icon={IndeterminateCheckBox}
            disabled={!isDecable}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        <Input
          name="quantity"
          value={quantity}
          onChange={(event) => set(event.target.value)}
          inputProps={{ "aria-label": "quantity" }}
        />
      </Grid>
      <Grid item xs={4}>
        {inc && (
          <Button
            label="add"
            onClick={() => inc()}
            Icon={AddBox}
            disabled={!isUpgrade}
          />
        )}
      </Grid>
    </Grid>
  );
}

QuantityInput.propTpes = {
  quantity: number,
  inc: func,
  dec: func,
  set: func,
};

QuantityInput.defaultProps = {
  quantity: 0,
  set: Function.prototype,
};
