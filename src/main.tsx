import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ChakraProvider, theme, ColorModeScript } from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
