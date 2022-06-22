import { Box, Button, Flex, Spacer, Text, useColorModeValue, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo, useEffect } from "react";
import { Card  } from "../../components";

const MusicPage = ({ musicList, updateList, showMore }) => {
  const background = useColorModeValue("teal.600", "BlackAlpha.800");

  const calledOnce = React.useRef(false);
  useEffect(() => {
    if(calledOnce.current) {
      return;
    }

    updateList(true);
    calledOnce.current = true;
  }, [updateList]);

  const showMoreButton = () => showMore && (
    <Flex>  
      <Spacer />
      <Button  variant="solid" colorScheme="green" size="lg" onClick={() => updateList()}>
        Buscar más
      </Button>
    </Flex>
  )

  return (
    <VStack pb="50px" bg={background} flex="1" justifyContent="center" alignItems="center">
      {
        musicList && musicList.length > 0 ? (
          <>
            <Wrap spacing='30px' pt="30px" pb="50px" justify="center">
              { 
                musicList.map(({image, artist, title, is_favorite: isFavorite, id}, idx) => (
                  <WrapItem key={`music-${id}`}>
                    <Card 
                      id={id}
                      img={image}
                      isFavorite={!!isFavorite}
                      artist={artist}
                      title={title} />
                  </WrapItem>
                ))
              }
            </Wrap>
            { showMoreButton() }
          </>
        ): (
          <Box p="30px" justifyContent="center" w="auto" rounded="20px" overflow="hidden" boxShadow="dark-lg">
            <Text fontSize='xl' fontWeight="bold" align="center">No hay resultados para mostrar</Text>
          </Box>
        )
      }
    </VStack>
  );
}
 
export default memo(MusicPage);