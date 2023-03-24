import { Button, Image, Textarea } from "@mantine/core";
import React from "react";
import Api from "./api/Api";
import Modal from "./Modal";
import Text from "./records/Text";

function App() {
  return (
    <div>
      {/* <Api /> */}
      {/* <Modal /> */}
      <Text />
      <Image />
      <Button />
    </div>
  );
}

export default App;
