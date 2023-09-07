import axios from 'axios'
import { ExchangeProp } from '../interface/ExchangeProp'
import { useEffect, useState } from 'react'
import { Container, HStack } from '@chakra-ui/react'
import { Error, ExchangeCard, Loader } from '.'

const API_URL = `${import.meta.env.VITE_API_URL}`

export const Exchanges = () => {
  const [exchnages, setExchanges] = useState<ExchangeProp[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data: Exchanges } = await axios.get<ExchangeProp[]>(
          `${API_URL}/exchanges`
        )
        setExchanges(Exchanges)
        setIsFetching(false)
      } catch (error) {
        setIsError(true)
        setIsFetching(false)
      }
    }

    fetchExchange()
  }, [])

  if (isError) return <Error message='error occured while fetching exchanges' />

  return (
    <Container maxW={'container.xl'}>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {exchnages.map((exchnage) => (
              <ExchangeCard {...exchnage} key={exchnage.id} />
            ))}
          </HStack>
        </>
      )}
    </Container>
  )
}
