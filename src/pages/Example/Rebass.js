import React from 'react'
import { Box, Heading, Button, Flex, Text } from 'rebass'

export default props =><> 
  <Box>
    <Heading>Hello 2</Heading>
  </Box>

<hr />

    <Flex mx={2}>
    <Box width={1/2} height={3} px={2}>
      <Text p={1} color='background' bg='primary'>
        Half
      </Text>
    </Box>
    <Box width={1/2} height={3} px={2}>
      <Text p={1} color='background' bg='primary'>
        Half
      </Text>
    </Box>
    </Flex>

    <hr />



<Flex flexWrap='wrap' mx={-2}>
  <Box px={2} py={2} width={1/2}>
    <Text p={1} color='background' bg='primary'>1/2</Text>
  </Box>
  <Box px={2} py={2} width={1/2}>
    <Text p={1} color='background' bg='primary'>1/2</Text>
  </Box>
  <Box px={2} py={2} width={1/3}>
    <Text p={1} color='background' bg='primary'>1/3</Text>
  </Box>
  <Box px={2} py={2} width={1/3}>
    <Text p={1} color='background' bg='primary'>1/3</Text>
  </Box>
  <Box px={2} py={2} width={1/3}>
    <Text p={1} color='background' bg='primary'>1/3</Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='background' bg='primary'>1/4</Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='background' bg='primary'>1/4</Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='background' bg='primary'>1/4</Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='background' bg='primary'>1/4</Text>
  </Box>
</Flex>



    </>


