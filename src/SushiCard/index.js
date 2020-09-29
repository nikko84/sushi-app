import React from "react";

import { string } from "prop-types";
import { IndeterminateCheckBox, AddBox } from "@material-ui/icons";
import { number } from "prop-types";
import {
  CardContent,
  Card,
  Button,
  Typography,
  CardMedia,
  CardActions,
  Input,
  IconButton,
} from "@material-ui/core";

import useStyles from "./styles";
import { useCounter } from "react-use";

export default function SushiCard({ image, title, description, beginAt }) {
  const classes = useStyles();
  const [quantity, { inc, dec, set }] = useCounter(0, 10, 0);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <IconButton aria-label="delete" onClick={() => dec()}>
          <IndeterminateCheckBox />
        </IconButton>
        <Input
          name="quantity"
          value={quantity}
          onChange={(event) => set(event.target.value)}
          inputProps={{ "aria-label": "quantity" }}
        />
        <IconButton aria-label="add" onClick={() => inc()}>
          <AddBox />
        </IconButton>
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
  image:
    "https://www.cookomix.com/wp-content/uploads/2018/05/sushis-thermomix-800x600.jpg",
  title: "Makiii",
  description: "super sushi saumon avocat",
  beginAt: 0,
};
