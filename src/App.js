import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { AppProvider } from './hooks/AppContexts';
import { ColorSwitcher } from './components';
import Routes from './Routes';

function App() {
  // const { colorMode } = useColorMode();
  // const background = colorMode === "light" ? "blue.300" : "BlackAlpha.800";
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <ColorSwitcher />
        <Routes />
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
