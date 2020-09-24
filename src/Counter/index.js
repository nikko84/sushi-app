import React from "react";
import { number } from "prop-types";

import useCounter from "../useCounter";
import Button from "../Button";

import { CounterValue } from "./styles";

export default function Counter({ beginAt }) {
  const [i, increment, decrement] = useCounter(beginAt);

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
