import React from "react";
import { TextField } from "@material-ui/core";

import Screen from "../Screen";

import SushiCardList from "../SushiCardList";

export default function HomeScreen() {
  const [search, setSearch] = React.useState("");
  const handleChangeBar = (event) => setSearch(event.target.value);

  return (
    <>
      <Screen title="sushi trop cool" />
      <article>
        <TextField
          variant="outlined"
          value={search}
          onChange={handleChangeBar}
          fullWidth
        />
        <SushiCardList search={search} />
      </article>
    </>
  );
}
