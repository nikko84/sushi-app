import React from "react";

import { string } from "prop-types";
import { IndeterminateCheckBox, AddBox } from "@material-ui/icons";

import {
  CardContent,
  Card,
  Button,
  Typography,
  CardMedia,
  CardActions,
  TextField,
  IconButton,
} from "@material-ui/core";

import useStyles from "./styles";

export default function SushiCard({ image, title, description }) {
  const classes = useStyles();

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
        <IconButton aria-label="delete">
          <IndeterminateCheckBox />
        </IconButton>
        <TextField></TextField>
        <IconButton aria-label="add">
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
};

SushiCard.defaultProps = {
  image:
    "https://www.cookomix.com/wp-content/uploads/2018/05/sushis-thermomix-800x600.jpg",
  title: "Makiii",
  description: "super sushi saumon avocat",
};
