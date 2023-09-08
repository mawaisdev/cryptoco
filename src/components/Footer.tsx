import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react'
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.700'}
      minH={'48'}
      px={'16'}
      py={['16', '8']}
      color={'white'}
    >
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to our Newsletter
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder='Enter Your mail here....'
              border={'none'}
              borderRadius='none'
              outline={'none'}
              focusBorderColor='none'
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VidTube
          </Heading>
          <Text>@All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a target={'blank'} href='https://www.youtube.com'>
              <AiFillYoutube size={'20px'} />
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a target={'blank'} href='https://www.intagram.com'>
              <AiFillInstagram size={'20px'} />
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a target={'blank'} href='https://www.github.com'>
              <AiFillGithub size={'20px'} />
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  )
}

export { Footer }
