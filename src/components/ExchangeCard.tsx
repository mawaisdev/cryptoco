import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import { ExchangeProp } from '../interface/ExchangeProp'

export const ExchangeCard = ({
  image,
  name,
  trust_score_rank,
  url,
}: ExchangeProp) => {
  return (
    <a href={url} target={'blank'}>
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
          {trust_score_rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  )
}
