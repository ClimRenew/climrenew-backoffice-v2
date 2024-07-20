'use client'
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
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  return (
    <Flex height="100vh">
      <Box
        // flex="1"
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
          <form>
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
                borderRadius={"8px"}
                width={"405px"}
                border="1px solid #D9D9D9"
                height={"48px"}
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
                borderRadius={"8px"}
                width={"405px"}
                border="1px solid #D9D9D9"
                height={"48px"}
              />
            </FormControl>
            <Flex justifyContent="space-between" mb="4">
              <Checkbox
                color="#8E8E8E"
                // border="1px solid #E3E3E3"
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
                fontWeight={"400"}
                className="poppins"
              >
                Forgot password?
              </Text>
            </Flex>
            <Button
              bg="#22C55E"
              color={"white"}
              width="405px"
              borderRadius={"15px"}
              height={"42px"}
              mt="4"
              className="inter"
              fontWeight={"600"}
              onClick={()=> router.push('/dashboard')}
            >
              Sign in
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
