import { HStack, Text } from '@chakra-ui/react'

export type ItemProps = {
  title: string
  value: string
}
export const Item = ({ title, value }: ItemProps) => {
  return (
    <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
      <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>
        {title}
      </Text>
      <Text>{value}</Text>
    </HStack>
  )
}
