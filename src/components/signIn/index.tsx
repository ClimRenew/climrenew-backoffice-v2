"use client";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Text,
  Image,
  Center,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { authenticateUser } from "@/redux/features/auth";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(authenticateUser({ email, password }))
      .unwrap()
      .then((response) => {
        if (response.status) {
          toast({
            title: "Login successful",
            description: response.message,
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
          router.push("/dashboard");
        } else {
          toast({
            title: "Login failed",
            description: response.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        }
      })
      .catch((error) => {
        console.error("Login failed: ", error);
        const errorMessage =
          error.errors?.password?.[0] || "Please check your credentials.";
        toast({
          title: "Login failed",
          description: errorMessage,
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  return (
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
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="white"
      >
        <Box width="80%" maxWidth="400px">
          <Center mb="8">
            <Image src="/assets/climerenewLogo.png" alt="Logo" />
          </Center>
          <Text
            fontSize="32px"
            lineHeight={"32px"}
            color="#1A1C1E"
            fontWeight="600"
            mb="4"
            textAlign="center"
            className="inter"
          >
            Welcome Back
          </Text>
          <Text
            mb="4"
            w="full"
            className="poppins"
            fontSize={"16px"}
            fontWeight="400"
            textAlign={"center"}
            color={"#8E8E8E"}
          >
            Welcome back! Please enter your details.
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" mb="4">
              <FormLabel
                color={"#232323"}
                fontSize={"16px"}
                fontWeight="500"
                className="inter"
                lineHeight={"30px"}
              >
                Email
              </FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderRadius={"8px"}
                width={"405px"}
                border="1px solid #D9D9D9"
                height={"48px"}
                focusBorderColor="#22C55E"
              />
            </FormControl>
            <FormControl id="password" mb="4">
              <FormLabel
                color={"#232323"}
                fontSize={"16px"}
                fontWeight="500"
                className="inter"
                lineHeight={"30px"}
              >
                Password
              </FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderRadius={"8px"}
                width={"405px"}
                border="1px solid #D9D9D9"
                focusBorderColor="#22C55E"
                height={"48px"}
              />
            </FormControl>
            <Flex justifyContent="space-between" mb="4">
              <Checkbox
                color="#8E8E8E"
                fontWeight="400"
                className="poppins"
                fontSize="14px"
              >
                Remember me
              </Checkbox>
              <Text
                color="#D50100"
                cursor="pointer"
                fontSize={"14px"}
                onClick={()=> router.push('/forgot-passwords')}
                fontWeight={"400"}
                className="poppins"
              >
                Forgot password?
              </Text>
            </Flex>
            <Button
              // bg="#22C55E"
              color={"white"}
              width="405px"
              borderRadius={"15px"}
              height={"42px"}
              mt="4"
              className="inter"
              fontWeight={"600"}
              type="submit"
              bg={isLoading ? "transparent" : "#22C55E"}
              border={isLoading ? "1px solid #22C55E" : "none"}
              _hover={{
                bg: isLoading ? "transparent" : "",
              }}
              _active={{
                bg: isLoading ? "transparent" : "",
              }}
              // isLoading={loading}
            >
             {loading ? <Spinner size="sm" color="white" /> : "Sign In"}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignIn;
