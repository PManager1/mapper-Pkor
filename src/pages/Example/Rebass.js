import React from 'react'
import { Box, Heading, Button, Flex, Text } from 'rebass'

export default props =><> 
  <Box>
    <Heading>Hello 2</Heading>
    <Button>Rebass 2</Button>
  </Box>

    <Flex mx={-2}>
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
    </>