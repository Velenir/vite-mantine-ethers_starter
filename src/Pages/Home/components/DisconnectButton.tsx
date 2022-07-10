import { Button, Group, Text } from "@mantine/core";
import { useAccount, useDisconnect } from "wagmi";


export function DisconnectButton() {
  const {address} = useAccount()
  const { disconnect } = useDisconnect()
  return <Group>
    <Text color="dimmed">{address}</Text>
    <Button variant="outline" onClick={() => disconnect()}>Disconnect</Button>
  </Group>
}