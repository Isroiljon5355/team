import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

function Mod({ item }) {
  const [opened, { open, close }] = useDisclosure(true);

  return (
    <>
      <Modal opened={opened} onClose={close} title={item.name}>
        {item.item}
      </Modal>
      {item.item}
      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export default Mod;
