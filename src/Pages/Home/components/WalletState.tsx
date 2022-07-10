import { useAccount } from "wagmi";
import { ConnectButton } from "./ConnectButton";
import { DisconnectButton } from "./DisconnectButton";

export function WalletState() {
  const { isConnected } = useAccount()
  return isConnected ?  <DisconnectButton/> : <ConnectButton />
}