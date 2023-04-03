import React, { createContext } from "react";
import Records from "../src/records/Records";
import TheText from "./records/TheText";
import TheButton from "./records/button/TheButton";
import Hundredtwenty from "../src/records/120K/Hundredtwenty";

function App() {
  const greet = createContext(text);
  const text = "Hello world";
  return (
    <div>
      <Records />
      <TheText />
      <TheButton />
      <Hundredtwenty />
    </div>
  );
}

export default App;
