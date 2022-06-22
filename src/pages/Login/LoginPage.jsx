import React, { useState } from 'react';

import { Avatar, Box, Button, chakra, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useAuth } from '../../hooks';
import { Navigate } from 'react-router-dom';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginPage = () => {
  const background = useColorModeValue("teal.600", "BlackAlpha.800");
  const formBackground = useColorModeValue('teal.300', 'gray.700');
  const [showPassword, setShowPassword] = useState(false);
  const { token, onLogin } = useAuth();

  if(token) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleShowClick = () => setShowPassword(!showPassword);
  
  return (
    <Flex h="100vh" w="100wh" alignItems="center" justifyContent="center" bg={background}>
      <Stack
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
        alignItems="center"
      >
        <Avatar />
        <Heading color="teal.400">Welcome</Heading>
        <Box w={{ base: "90%", md: "auto" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt />}
                  />
                  <Input type="text" placeholder="user" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLock />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="button"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={onLogin}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
 
export default LoginPage;