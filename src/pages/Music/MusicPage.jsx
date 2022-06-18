import { useColorModeValue, Wrap } from "@chakra-ui/react";
import React from "react";
import { Card  } from "../../components";
import { useMusic } from "../../hooks";

const MusicPage = () => {
  const { musicList } = useMusic();
  const background = useColorModeValue("teal.600", "BlackAlpha.800");
  return (
    <Wrap spacing='30px' pt="30px" pb="30px" justify="center" bg={background}>
      {
        musicList.map(({image}, idx) => (<Card key={`music-${idx}`} img={image} />))
      }
    </Wrap>
  );
}
 
export default MusicPage;