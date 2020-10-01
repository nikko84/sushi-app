import React from "react";
import { string, number } from "prop-types";
import { Badge, Avatar, AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import { ShoppingCart, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

import sushiLoto from "./logoSushi.jpg";

// import { Logo, Title, Wrapper, Badge } from "./styles";

const websiteTitle = "super suhi";

export default function Header({ title, basketCount }) {
  const classes = useStyles();
  const fullTitle = `${websiteTitle} - ${title}`;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <Avatar alt={fullTitle} src={sushiLoto} className={classes.logo} />
          </Link>
          <Typography variant="h6" className={classes.title}>
            {fullTitle}
          </Typography>
          <Link to="/basket">
            <Badge badgeContent={basketCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </Link>
          <Link to="/settings" className={classes.settings}>
            <Settings />
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}

Header.propType = {
  title: string,
  basketCount: number,
};

Header.defaultProps = {
  basketCount: 0,
};
