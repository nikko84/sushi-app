import React from "react";

import BasketItemList from "../BasketItemList";
import { Button } from "@material-ui/core";
import { useList } from "react-use";

import Screen from "../Screen";

export default function BasketScreen() {
  const [addedSushis, { removeAt, clear }] = useList([
    { id: 1, title: "sushi" },
    { id: 2, title: "sushi" },
    { id: 3, title: "sushi" },
  ]);

  const buy = () => clear();
  return (
    <Screen title="Basket">
      <BasketItemList sushis={addedSushis} removeAt={removeAt} />
      <Button variant="contained" color="primary" onClick={buy}>
        Acheter
      </Button>
    </Screen>
  );
}
