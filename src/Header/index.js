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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt={{ websiteTitle } - { title }}
            src={sushiLoto}
            className={classes.logo}
          />
          <Typography variant="h6" className={classes.title}>
            {websiteTitle} - {title}
          </Typography>
          <Badge badgeContent={17} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propType = {
  title: string,
};
