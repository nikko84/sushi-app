import React from "react";
import { string } from "prop-types";

import sushiLoto from "./logoSushi.jpg";

import { Logo, Title, Wrapper, Badge } from "./styles";

const websiteTitle = "super suhi";

export default function Header({ logo, title }) {
  return (
    <Wrapper>
      <Logo src={sushiLoto} alt={websiteTitle}></Logo>
      <Title>
        {websiteTitle} - {title}
      </Title>
      <Badge>3</Badge>
    </Wrapper>
  );
}

Header.propType = {
  title: string,
};
