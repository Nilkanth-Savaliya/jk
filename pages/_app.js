import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
      }}> 
        <Component {...pageProps} />
      </motion.div>
    </ChakraProvider>
  )
}

export default MyApp
