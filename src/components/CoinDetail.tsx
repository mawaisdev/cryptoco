import {
  Box,
  Container,
  HStack,
  Radio,
  RadioGroup,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CustomBar, Error, Item, Loader } from '.'
import axios from 'axios'
import { CoinDetailProps, CurrencyData } from '../interface/CoinDetailProps'

export const CoinDetail = () => {
  const [coin, setCoin] = useState<CoinDetailProps>()
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [currency, setCurrency] = useState<string>('usd')
  const coinSymbol = currency === 'eur' ? '€' : currency === 'usd' ? '$' : '₨ '

  const API_URL = `${import.meta.env.VITE_API_URL}`
  const { id } = useParams()
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data: coinDetail } = await axios.get<CoinDetailProps>(
          `${API_URL}/coins/${id}`
        )
        setCoin(coinDetail)
        setIsFetching(false)
      } catch (error) {
        setIsError(true)
        setIsFetching(false)
        console.error(error)
      }
    }
    fetchCoin()
  }, [id])

  if (isError)
    return <Error message={`Error occured While Fetching details for ${id}`} />

  return (
    <Container maxW={'container.xl'}>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <Box borderWidth={1} width={'full'}>
            Chart
          </Box>

          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value='pkr'>PKR</Radio>
              <Radio value='usd'>USD</Radio>
              <Radio value='eur'>EUR</Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
            <Text fontSize={'small'} alignSelf={'center'} opacity={'0.7'}>
              Last Updated On:{' '}
              {coin?.market_data.last_updated
                ? new Date(coin.market_data.last_updated).toLocaleString()
                : 'N/A'}
            </Text>
            <Image
              src={coin?.image.large}
              alt={coin?.name}
              w={'16'}
              h={'16'}
              objectFit={'contain'}
            />
            <Stat>
              <StatLabel>{coin ? coin.name : 'N/A'}</StatLabel>
              <StatNumber>
                {coinSymbol}{' '}
                {coin?.market_data.current_price[
                  currency as keyof CurrencyData
                ] || 'N/A'}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    (coin?.market_data.price_change_24h || 0) > 0
                      ? 'increase'
                      : 'decrease'
                  }
                />
                {coin?.market_data.price_change_24h} %
              </StatHelpText>
            </Stat>
            <Badge
              fontSize={'2xl'}
              bgColor={'blackAlpha.700'}
              color={'white'}
            >{`#${coin?.market_cap_rank}`}</Badge>
            <CustomBar
              high={`${coinSymbol}${
                coin?.market_data.high_24h[currency as keyof CurrencyData] || 0
              }`}
              low={`${coinSymbol}${
                coin?.market_data.low_24h[currency as keyof CurrencyData] || 0
              }`}
            />

            <Box w={'full'} p={'4'}>
              <Item
                title='Max Supply'
                value={`${coinSymbol}${coin?.market_data.max_supply || 0}`}
              />
              <Item
                title='Circulating Supply'
                value={`${coinSymbol}${
                  coin?.market_data.circulating_supply || 0
                }`}
              />
              <Item
                title='Market Cap'
                value={`${coinSymbol}${
                  coin?.market_data.market_cap[
                    currency as keyof CurrencyData
                  ] || 0
                }`}
              />
              <Item
                title='All time low'
                value={`${coinSymbol}${
                  coin?.market_data.atl[currency as keyof CurrencyData] || 0
                }`}
              />
              <Item
                title='All time high'
                value={`${coinSymbol}${
                  coin?.market_data.ath[currency as keyof CurrencyData] || 0
                }`}
              />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  )
}
