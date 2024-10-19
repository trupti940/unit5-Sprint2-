import * as React from 'react';
import MyApp from './MyApp';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

function App() {
  
  return (
    <ChakraProvider>
      <MyApp />
    </ChakraProvider>
  )
}
export default App;