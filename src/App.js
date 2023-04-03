import React, { createContext } from "react";
import TheText from "./records/TheText";
import TheButton from "./records/button/TheButton";
import Hundredtwenty from "../src/records/120K/Hundredtwenty";

function App() {
  const text = "Hello world";

  return (
    <div>
      <TheText />
      <TheButton />
      <Hundredtwenty />
    </div>
  );
}

export default App;
