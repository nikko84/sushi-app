import React from "react";

import { string } from "prop-types";

import { number } from "prop-types";
import {
  CardContent,
  Card,
  Button,
  Typography,
  CardMedia,
  CardActions,
} from "@material-ui/core";

import useStyles from "./styles";
import QuantityInput from "./QuantityInput";
import { useCounter } from "react-use";

import config from "react-global-configuration";

export default function SushiCard({ image, title, description, beginAt }) {
  const classes = useStyles();
  const { max, min, defaultValue } = config.get("quantity");
  const [quantity, { inc, dec, set }] = useCounter(defaultValue, max, min);

  return (
    <Card className={classes.root}>
      {image && (
        <CardMedia className={classes.media} image={image} title={title} />
      )}
      <CardContent>
        <Typography variant="h5" component="h2">
          {title || "anonymous"}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <QuantityInput quantity={quantity} inc={inc} dec={dec} set={set} />
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

SushiCard.propTypes = {
  image: string,
  title: string,
  description: string,
  beginAt: number,
};

SushiCard.defaultProps = {
  title: "Makiii",
  description: "super sushi saumon avocat",
  beginAt: 0,
};
