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
  Divider,
} from "@chakra-ui/react";
import { ChevronDownIcon, SettingsIcon } from "@chakra-ui/icons";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProfileMenu: React.FC = () => {
  const router = useRouter();
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        w="full"
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
          <Box
            flexDirection={"column"}
            display={"flex"}
            alignItems={"start"}
            justifyContent={"start"}
          >
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
      <MenuList w="256px">
        <VStack align="stretch" p={2} w="full">
          <Text
            w="full"
            color="#2E2E2E"
            fontSize={"16px"}
            className="inter"
            fontWeight={"500"}
            lineHeight={"19.36px"}
          >
            David Ayewah
          </Text>
          <Text
            w="full"
            color="#9E9E9E"
            fontSize={"14px"}
            className="inter"
            fontWeight={"500"}
            lineHeight={"16.94px"}
            py={"2"}
          >
            david.ayewah@gmail.com
          </Text>
          <Divider />
          <MenuItem
            // icon={<Icon as={MdDashboard} />}

            py={"2"}
            mt={"6"}
          >
            <Box display={"flex"} gap={"3"}>
              <Image
                src="/assets/dashboardIcon.png"
                alt="icon"
                width={20}
                quality={100}
                height={20}
              />{" "}
              <Text
                color="#2E2E2E"
                fontSize={"16px"}
                className="inter"
                fontWeight={"500"}
                lineHeight={"19.36px"}
              >
                Dashboard
              </Text>
            </Box>
          </MenuItem>
          <MenuItem
            // icon={<Icon as={FaUserAlt} />}

            py={"2"}
          >
            <Box display={"flex"} gap={"3"}>
              <Image
                src="/assets/profileIcon.png"
                alt="icon"
                width={20}
                quality={100}
                height={20}
              />{" "}
              <Text
                color="#2E2E2E"
                fontSize={"16px"}
                className="inter"
                fontWeight={"500"}
                lineHeight={"19.36px"}
              >
                Profile
              </Text>
            </Box>
          </MenuItem>
          <Button
            // leftIcon={<FaSignOutAlt />}
            bg="#22C55E"
            lineHeight={"16.94px"}
            borderRadius={"10px"}
            my={4}
            cursor={'pointer'}
            onClick={()=> router.push('/')}
          >
            <Box display={"flex"} gap={"2"}>
              <Image
                src="/assets/signOut.png"
                alt="icon"
                width={15}
                quality={100}
                height={15}
              />
              <Text
                className="inter"
                color="#FFFFFF"
                fontSize={"14px"}
                fontWeight={"500"}
              >
                Sign Out
              </Text>
            </Box>
          </Button>
        </VStack>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
