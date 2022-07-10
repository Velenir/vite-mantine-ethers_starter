import { Home } from './Pages/Home';
import { MantineProvider } from '@mantine/core';
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

function App() {

  return <MantineProvider theme={{ colorScheme: "dark" }}><WagmiConfig client={client}><Home /></WagmiConfig></MantineProvider>
}

export default App
