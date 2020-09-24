import styled from "styled-components";

export const Logo = styled.img`
  width: 140px;
  height: 140px;
`;

const headerHeight = 160;

export const Title = styled.h1`
  display: inline-block;
  height: ${headerHeight}px;
  vertical-align: middle;
`;

export const Wrapper = styled.header`
  height: ${headerHeight}px;
  border-bottom: 1px solid grey;
`;

export const Badge = styled.span`
  position: absolute;
  right: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #eb5926;
  text-align: center;
  font-weight: bold;
  font-heiht: 2em;
  color: white;
`;
