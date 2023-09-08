import { Box, Image, Text } from '@chakra-ui/react'
import btcSrc from '../assets/btc.png'

export const Home = () => {
  return (
    <Box bgColor={'blackAlpha.700'} w={'full'} h={'85vh'}>
      <Image
        h={'full'}
        w={'full'}
        objectFit={'contain'}
        src={btcSrc}
        filter={'grayscale(0.8)'}
      />
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
