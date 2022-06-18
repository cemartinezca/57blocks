import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorSwitcher = (props) => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
      <IconButton
          size="lg"
          fontSize="30px"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          marginRight="5"
          marginBottom="5"
          position="fixed"
          right="0px"
          bottom="0px"
          onClick={toggleColorMode}
          icon={<SwitchIcon/>}
          {...props}
      />
    );
}
 
export default ColorSwitcher;