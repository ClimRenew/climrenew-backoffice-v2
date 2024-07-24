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
  FormErrorMessage,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { requestResetPassword } from "@/redux/features/auth";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useAppDispatch();
  const toast = useToast();
  const router = useRouter();
  const { loading, error, message, token, key, validationErrors } = useAppSelector((state) => state.auth);

  const handleResetPassword = () => {
    if (token && key) {
      dispatch(requestResetPassword({ token, key, password, confirmPassword })).then((result) => {
        if (result.type === "auth/resetPassword/fulfilled") {
          toast({
            title: "Password reset.",
            description: message,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          router.push("/");
        } else if (result.type === "auth/resetPassword/rejected") {
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
                Reset Password
              </Text>
              <Text
                fontSize="14px"
                color="#737373"
                lineHeight="21px"
                className="urbanist"
                w="full"
              >
                Please enter your new password.
              </Text>
              <Image src="/assets/mainSMS.png" alt="sms Icon" w="100px" />

              <FormControl isInvalid={validationErrors?.password && validationErrors.password.length > 0}>
                <InputGroup
                  w={{ lg: "540px", xxl: "600px", xlg: "540px", sm: "full" }}
                >
                  <Input
                    type="password"
                    placeholder="New Password"
                    h="52px"
                    borderRadius="12px"
                    color={"#454545"}
                    fontWeight={"400"}
                    focusBorderColor="#121313"
                    className="urbanist"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                {validationErrors?.password && (
                  <FormErrorMessage>{validationErrors.password[0]}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={validationErrors?.password_confirmation && validationErrors.password_confirmation.length > 0} mt={4}>
                <InputGroup
                  w={{ lg: "540px", xxl: "600px", xlg: "540px", sm: "full" }}
                >
                  <Input
                    type="password"
                    placeholder="Confirm New Password"
                    h="52px"
                    borderRadius="12px"
                    color={"#454545"}
                    fontWeight={"400"}
                    focusBorderColor="#121313"
                    className="urbanist"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </InputGroup>
                {validationErrors?.password_confirmation && (
                  <FormErrorMessage>{validationErrors.password_confirmation[0]}</FormErrorMessage>
                )}
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
                  onClick={handleResetPassword}
                  className="urbanist"
                  isLoading={loading}
                >
                  {loading ? <Spinner size="sm" /> : "Reset Password"}
                </Button>
              </Box>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};

export default ResetPassword;
