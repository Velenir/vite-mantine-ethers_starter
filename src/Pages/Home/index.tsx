import { AppShell, Navbar, Header, Box } from '@mantine/core';
import { WalletState } from './components/WalletState';

export function Home() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header sx={{display: "flex"}} height={60} p="xs"><Box ml="auto"><WalletState/></Box></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        // root: {minHeight: "100vh"}
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}
