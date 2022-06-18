import { Badge, Box, Button, Flex, Icon, Image, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Card = ({img}) => {
  const { colorMode } = useColorMode();
  const [rating, setRating] = useState(0);

  const size = 48;
  const icon = "star";
  const scale = 5;
  const fillColor = "gold";
  const strokeColor = "grey";

  const onClick = idx => {
    if (!isNaN(idx)) {
      // allow user to click first icon and set rating to zero if rating is already 1
      if (rating === 1 && idx === 1) {
        setRating(0);
      } else {
        setRating(idx);
      }
    }
  };
  
  return (
    <Box w="300px" rounded="20px" 
        overflow="hidden" bg={ colorMode === "dark" ? "gray.700": "gray.200"} ms="0" className='class'>
      <Image src={img} alt="Card Image" boxSize="300px">
      </Image>
      <Icon
          name={icon}
          size={`${size}px`}
          color={fillColor}
          stroke={strokeColor}
          onClick={onClick}
          fillOpacity={fill ? "100%" : "0"}
      />
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