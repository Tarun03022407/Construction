import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Mains from './components/Mains';

function App() {
  return (
    <ChakraProvider>
      <Mains/>
    </ChakraProvider>
  );
}

export default App;
