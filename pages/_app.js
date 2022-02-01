import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
function MyApp({ Component, pageProps }) {
  return(
  <ChakraProvider>
   <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
