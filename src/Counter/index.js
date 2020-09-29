import React from "react";
import { number } from "prop-types";

import { useCounter } from "react-use";
import Button from "../Button";

import { CounterValue } from "./styles";

export default function Counter({ beginAt }) {
  const [i, increment, decrement] = useCounter(beginAt);
  const [value, { inc, dec, set, reset }] = useCounter(0, 10, min);
  return (
    <div>
      <Button onClick={decrement} secondary>
        -
      </Button>
      <CounterValue>{i}</CounterValue>
      <Button onClick={increment}>+</Button>
    </div>
  );
}

Counter.propTypes = {
  beginAt: number,
};

Counter.defaultProps = {
  beginAt: 0,
};
