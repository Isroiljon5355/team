import { Image } from "@mantine/core";
import React from "react";
// import Api from "./api/Api";
// import Modal from "./Modal";
import Button from "../src/records/button/Button";
import Text from "./records/Text";
import Hundredtwenty from "./records/120K/Hundredtwenty.jsx";

function App() {
  return (
    <div>
      {/* <Api /> */}
      {/* <Modal /> */}
      <Text />
      <Image />
      <Hundredtwenty />
      <Button />
    </div>
  );
}

export default App;
