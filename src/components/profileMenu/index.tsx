"use client";

import { useEffect } from "react";
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
  Divider,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getAdminProfile } from "@/redux/features/adminProfile";

const ProfileMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const toast = useToast();
  const { profile, loading, error } = useAppSelector((state) => state.adminProfile);

const user = profile ? profile.admin : undefined;

  useEffect(() => {
    dispatch(getAdminProfile());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  if (loading) {
    return <Spinner />;
  }

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
              src={user?.photo || "/assets/memoji.png"}
              width={40}
              height={40}
              quality={100}
              alt="Profile Image"
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
              {user?.name || "Admin Name"}
            </Text>
            <Text
              className="inter"
              fontWeight={"400"}
              fontSize={"14px"}
              pt={"2"}
              color={"#7C7C7C"}
              lineHeight={"16.49px"}
            >
              {user?.role || "Admin Role"}
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
            {user?.name || "Admin Name"}
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
            {user?.email || "Admin Email"}
          </Text>
          <Divider />
          <MenuItem py={"2"} mt={"6"} onClick={() => router.push("/dashboard")}>
            <Box display={"flex"} gap={"3"}>
              <Image
                src="/assets/dashboardIcon.png"
                alt="Dashboard Icon"
                width={20}
                quality={100}
                height={20}
              />
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
          <MenuItem py={"2"} onClick={() => router.push("/profile")}>
            <Box display={"flex"} gap={"3"}>
              <Image
                src="/assets/profileIcon.png"
                alt="Profile Icon"
                width={20}
                quality={100}
                height={20}
              />
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
            bg="#22C55E"
            lineHeight={"16.94px"}
            borderRadius={"10px"}
            my={4}
            cursor={"pointer"}
            onClick={() => router.push('/')}
          >
            <Box display={"flex"} gap={"2"}>
              <Image
                src="/assets/signOut.png"
                alt="Sign Out Icon"
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
