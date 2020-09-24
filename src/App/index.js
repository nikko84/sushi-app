import React from "react";

import Greetings from "../Greetings";
import Counter from "../Counter";

export default function App() {
  return (
    <article>
      <Greetings firstname="Nico" surname="tic" />
      <Greetings firstname="Nico" />

      <Counter beginAt={4} />
      <Counter />
    </article>
  );
}
