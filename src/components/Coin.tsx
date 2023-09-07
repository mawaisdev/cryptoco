import { VStack, Image, Heading, Text } from '@chakra-ui/react'
import { CoinProps } from '../interface/CoinProp'
import { Link } from 'react-router-dom'

export const Coin = ({
  id,
  image,
  symbol,
  name,
  current_price: price,
  coinSymbol,
}: CoinProps) => {
  return (
    <Link to={`/coins/${id}`}>
      <VStack
        w={'52'}
        shadow={'lg'}
        p={'8'}
        borderRadius={'lg'}
        transition={'all 0.3'}
        m={'4'}
        css={{
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Image src={image} w={'10'} h={'10'} objectFit={'contain'} alt={name} />
        <Heading size={'md'} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${coinSymbol} ${price}` : 'N/A'}</Text>
      </VStack>
    </Link>
  )
}
