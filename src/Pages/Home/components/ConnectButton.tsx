import { Button, Group, Modal } from "@mantine/core";
import { useState } from "react";
import { WalletOptions } from "./WalletOptions";


export function ConnectButton() {
  const [opened, setOpened] = useState(false)
  return <>
    <Button onClick={() => setOpened(true)}>Connect wallet</Button>
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Connect Wallet"
    >
      <WalletOptions/>
    </Modal>
  </>
}