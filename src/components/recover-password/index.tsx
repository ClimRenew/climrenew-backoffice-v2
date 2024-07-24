"use client";

import {
  Box,
  Flex,
  FormControl,
  Input,
  Button,
  Text,
  Image,
  Center,
  useToast,
  Spinner,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { requestVerifyCode } from "@/redux/features/auth";

const RecoverPassword = () => {
  const [code, setCode] = useState("");
  const dispatch = useAppDispatch();
  const toast = useToast();
  const router = useRouter();
  const { loading, error, message, token, key } = useAppSelector((state) => state.auth);

  const handleVerifyCode = () => {
    if (token && key) {
      dispatch(requestVerifyCode({ code, token, key })).then((result) => {
        if (result.type === "auth/verifyCode/fulfilled") {
          toast({
            title: "Code verified.",
            description: message,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          router.push("/reset-passwords");
        } else if (result.type === "auth/verifyCode/rejected") {
          toast({
            title: "Error.",
            description: error,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
    } else {
      toast({
        title: "Error.",
        description: "Token and key are missing. Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Flex height="100vh">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Image src="/assets/login-Image.png" alt="Graphic" objectFit="fill" />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="white"
          pl={"6%"}
        >
          <VStack width="80%" spacing={4}>
            <Center mb="8">
              <Image src="/assets/climerenewLogo.png" alt="Logo" />
            </Center>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"6"}
            >
              <Text
                fontSize="30px"
                fontWeight="600"
                color={"#323130"}
                lineHeight={"39px"}
                className="urbanist"
                w="full"
              >
                Forgot Password
              </Text>
              <Text
                fontSize="14px"
                color="#737373"
                lineHeight="21px"
                className="urbanist"
                w="full"
              >
                A link was sent to your mail.....
              </Text>
              <Image src="/assets/mainSMS.png" alt="sms Icon" w="100px" />

              <FormControl>
                <InputGroup
                  w={{ lg: "540px", xxl: "600px", xlg: "540px", sm: "full" }}
                >
                  <Input
                    type="text"
                    placeholder="Input code sent to your email address"
                    h="52px"
                    borderRadius="12px"
                    color={"#454545"}
                    fontWeight={"400"}
                    focusBorderColor="#121313"
                    className="urbanist"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <Box
                width="full"
                display="flex"
                justifyContent="start"
                alignItems="center"
              >
                <Button
                  borderRadius="12px"
                  bg={"#22C55E"}
                  color={"white"}
                  mt={"4"}
                  h="54px"
                  w={{
                    lg: "540px",
                    xxl: "600px",
                    xlg: "540px",
                    sm: "360px",
                    md: "670px",
                  }}
                  fontWeight="600"
                  fontSize="16px"
                  onClick={handleVerifyCode}
                  className="urbanist"
                  isLoading={loading}
                >
                  {loading ? <Spinner size="sm" /> : "Next"}
                </Button>
              </Box>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};

export default RecoverPassword;
