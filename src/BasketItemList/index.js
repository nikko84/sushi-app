import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Delete } from "@material-ui/icons";
import { ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { arrayOf, shape, number, string, func } from "prop-types";

export default function BasketItemList({ sushis, removeAt }) {
  return (
    <List component="ol" aria-label="basket item list">
      {sushis.map(({ id, title }, i) => (
        <ListItem key={id}>
          <ListItemText primary={title} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => removeAt(i)}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

BasketItemList.propTypes = {
  sushi: arrayOf(
    shape({
      id: number,
      title: string,
    })
  ),
  removeAt: func,
};
