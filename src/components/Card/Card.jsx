import { Badge, Box, Button, Flex, Image, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Card = ({img}) => {
  const { colorMode } = useColorMode();

  return (
    <Box w="300px" rounded="20px" 
        overflow="hidden" bg={ colorMode === "dark" ? "gray.700": "gray.200"} ms="0" className='class'>
      <Image src={img} alt="Card Image" boxSize="300px">
      </Image>
      <Box p={5}>
        <Stack align="center">
          <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
            GeeksForGeeks
          </Badge>
        </Stack>
        <Stack align="center">
          <Text as="h2" fontWeight="normal" my={2} >
            A Computer Science Portal for Geeks
          </Text>
          <Text fontWeight="light">
            A platform for students to study CSE concepts.
          </Text>
        </Stack>
        <Flex>  
          <Spacer />
          <Button variant="solid" colorScheme="green" size="sm">
            Learn More
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
 
export default Card;