import React, { useState } from "react";
import Button from "./records/button/Button";
import Records from "./records/Records";
import Text from "./records/Text";
import Hundredtwenty from "./records/120K/Hundredtwenty";
import Count from "./oncount/Count";

function App() {
  const [add, setAdd] = useState(0);
  return (
    <div>
      <Records />
      <Text />
      <Button />
      <Hundredtwenty />
      <Count />
    </div>
  );
}

export default App;
