import { Box, Image, Text } from '@chakra-ui/react'
import btcSrc from '../assets/btc.png'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <Box bgColor={'blackAlpha.700'} w={'full'} h={'85vh'}>
      <motion.div
        style={{
          height: '80vh',
        }}
        animate={{
          translateY: '20px',
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Image h={'full'} w={'full'} objectFit={'contain'} src={btcSrc} />
      </motion.div>
      <Text
        fontSize={'6xl'}
        textAlign={'center'}
        fontWeight={'thin'}
        color={'whiteAlpha.500'}
        mt={'-20'}
      >
        CryptoCO
      </Text>
    </Box>
  )
}
