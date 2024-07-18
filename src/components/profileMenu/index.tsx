"use client";
import {
  Box,
  Text,
  Flex,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, SettingsIcon } from "@chakra-ui/icons";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Image from "next/image";

const ProfileMenu: React.FC = () => {
  return (
    <Menu> 
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex gap={"2"}>
          <Box>
            <Image
              src="/assets/memoji.png"
              width={40}
              height={40}
              quality={100}
              alt="img"
            />
          </Box>
          <Box>
            <Text
              className="inter"
              fontWeight={"500"}
              fontSize={"16px"}
              color={"#303030"}
              lineHeight={"19.36px"}
            >
              Adeniyi Tosin
            </Text>
            <Text
              className="inter"
              fontWeight={"400"}
              fontSize={"14px"}
              pt={"2"}
              color={"#7C7C7C"}
              lineHeight={"16.49px"}
            >
              Admin
            </Text>
          </Box>
        </Flex>
      </MenuButton>
      <MenuList>
        <VStack align="stretch" p={4}>
          <MenuItem icon={<Icon as={MdDashboard} />}>Dashboard</MenuItem>
          <MenuItem icon={<Icon as={FaUserAlt} />}>Profile</MenuItem>
          <Button leftIcon={<FaSignOutAlt />} colorScheme="green" mt={4}>
            Sign Out
          </Button>
        </VStack>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
