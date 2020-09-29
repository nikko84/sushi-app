import React from "react";
import { string } from "prop-types";
import { Badge, Avatar, AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import sushiLoto from "./logoSushi.jpg";

// import { Logo, Title, Wrapper, Badge } from "./styles";

const websiteTitle = "super suhi";

export default function Header({ title }) {
  const classes = useStyles();
  const fullTitle = `${websiteTitle} - ${title}`;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Avatar alt={fullTitle} src={sushiLoto} className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            {fullTitle}
          </Typography>
          <Badge badgeContent={17} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}

Header.propType = {
  title: string,
};
