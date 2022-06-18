import { Avatar, Box, Button, Flex, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Outlet, Link as RouterLink} from "react-router-dom";
import React from "react";
import BasePage from "../Page";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../../hooks";

const Links = [
  { label: "Music", link: "music"},
  { label: "Favorites", link: "favorites"},
  { label: "Canvas", link: "canvas"},
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}>
    {children}
  </Link>
);

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onLogout } = useAuth();

  return (
  <BasePage>
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}>
            {
              Links.map((value, idx) => {
                const { link, label } = value;
                return (
                  <NavLink key={`link-${idx}`} >
                    <RouterLink to={`/dashboard/${link}`}>{label}</RouterLink>
                  </NavLink>
                )
              })
            }
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}>
              <Avatar
                size={"sm"}
              />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={onLogout}>Log out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {
              Links.map((value, idx) => {
                const { link, label } = value;
                return (
                  <NavLink key={`link-${idx}`} >
                    <RouterLink to={`/dashboard/${link}`}>{label}</RouterLink>
                  </NavLink>
                )
              })
            }
          </Stack>
        </Box>
      ) : null}
    </Box>
    <Outlet />
  </BasePage>
  );
}
 
export default Dashboard;