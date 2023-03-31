import React, { createContext } from "react";
import Text from "../src/records/Text";
import Records from "./records/Records";
import Button from "../src/records/button/Button";
import Hundredtwenty from "../src/records/120K/Hundredtwenty";

function App() {
  const greet = createContext(text);
  const text = "Hello world";
  return (
    <div>
      <Records />
      <Text />
      <Button />
      <Hundredtwenty />
    </div>
  );
}

export default App;
