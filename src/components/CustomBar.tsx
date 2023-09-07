import { Badge, HStack, Progress, Text, VStack } from '@chakra-ui/react'

export type CustomBarProps = {
  high: string
  low: string
}
export const CustomBar = ({ low, high }: CustomBarProps) => {
  return (
    <VStack>
      <Progress value={50} color={'teal'} w={'full'} />
      <HStack justifyContent={'space-between'} w={'full'}>
        <Badge children={low} colorScheme={'red'} />
        <Text fontSize={'sm'}>24H Range</Text>
        <Badge children={high} colorScheme={'green'} />
      </HStack>
    </VStack>
  )
}
