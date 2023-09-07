import { Alert, AlertIcon, Text } from '@chakra-ui/react'

export type ErrorProps = {
  message: string
}

export const Error = ({ message }: ErrorProps) => {
  return (
    <Alert
      status={'error'}
      position={'fixed'}
      bottom={'4'}
      left={'50%'}
      transform={'translate(-50%)'}
      w={'container.lg'}
    >
      <AlertIcon />
      <Text>{message}</Text>
    </Alert>
  )
}
