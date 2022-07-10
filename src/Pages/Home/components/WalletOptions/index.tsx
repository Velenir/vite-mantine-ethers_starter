import { Box, Button } from "@mantine/core";
import { useAccount, useConnect } from "wagmi";

export function WalletOptions() {
  const { connector: activeConnector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

  return <Box>
      {isConnected && <div>Connected to {activeConnector?.name}</div>}

      {connectors.map((connector) => (
        <Button variant="subtle"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {isLoading &&
            pendingConnector?.id === connector.id &&
            ' (connecting)'}
        </Button>
      ))}

      {error && <div>{error.message}</div>}
    </Box>
}