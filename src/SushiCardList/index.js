import React from "react";
import SushiCard from "../SushiCard";

import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { isEmpty } from "lodash";
import useSushis from "../useSushis";
import { CircularProgress } from "@material-ui/core";
import { string } from "prop-types";

export default function SushiCardList({ search }) {
  const classes = useStyles();
  const { isLoading, error, data: sushis } = useSushis(search);

  if (isLoading) return <CircularProgress color="secondary" />;
  if (error) return "Error";

  return (
    <Grid container spacing={2} className={classes.wrapper}>
      {isEmpty(sushis) && "Pas des sushi"}
      {sushis.map((sushi) => (
        <Grid item xs={6} md={3} key={sushi.id}>
          <SushiCard {...sushi} />
        </Grid>
      ))}
    </Grid>
  );
}

SushiCardList.propTypes = {
  search: string,
};
