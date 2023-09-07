import axios from 'axios'
import { CoinProp } from '../interface/CoinProp'
import { useEffect, useState } from 'react'
import {
  Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react'
import { Coin, Error, Loader } from '.'

const API_URL = `${import.meta.env.VITE_API_URL}`

export const CoinsList = () => {
  const [coins, setCoins] = useState<CoinProp[]>([])
  const [currency, setCurrency] = useState<string>('usd')
  const [page, setPage] = useState<number>(1)
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const coinSymbol = currency === 'eur' ? '€' : currency === 'usd' ? '$' : '₨ '
  const btns = new Array<number>(132).fill(1)

  const changePage = (page: number) => {
    setPage(page)
    setIsFetching(true)
  }
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data: Coins } = await axios.get<CoinProp[]>(
          `${API_URL}/coins/markets?vs_currency=${currency}&page=${page}`
        )
        setCoins(Coins)
        setIsFetching(false)
      } catch (error) {
        setIsError(true)
        setIsFetching(false)
      }
    }

    fetchCoins()
  }, [currency, page])

  if (isError) return <Error message='error occured while fetching coins' />
  return (
    <Container maxW={'container.xl'}>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value='pkr'>PKR</Radio>
              <Radio value='usd'>USD</Radio>
              <Radio value='eur'>EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {coins.length < 1 ? (
              <Text mt={'4'} textAlign={'center'}>
                No Data
              </Text>
            ) : (
              coins.map((coin) => {
                return <Coin {...coin} coinSymbol={coinSymbol} key={coin.id} />
              })
            )}
          </HStack>
          <HStack w={'full'} overflow={'auto'} p={'8'}>
            {btns.map((btn, index) => (
              <Button
                name={btn.toString()}
                key={index}
                bgColor={'blackAlpha.900'}
                color={'white'}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  )
}
