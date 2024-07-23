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
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const EmailSent = () => {
  const router = useRouter();
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
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="white"
        >
          <VStack
            width="80%"
            // maxWidth="400px"
            spacing={4}
            //   width={{ lg: "540px", xxl: "540px", sm: "full", md: "full" }}
          >
            <Center mb="8">
              <Image src="/assets/climerenewLogo.png" alt="Logo" />
            </Center>
            <Flex flexDirection={"column"} justifyContent={"center"} gap={"6"}>
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
              <FormControl>
                <FormLabel
                  fontWeight="600"
                  color={"#323130"}
                  lineHeight={"21px"}
                  fontSize={"14px"}
                  w="full"
                >
                  Email
                </FormLabel>
                <InputGroup
                  w={{ lg: "540px", xxl: "600px", xlg: "540px", sm: "full" }}
                >
                  <Input
                    type="email"
                    placeholder="Input email address"
                    h="52px"
                    borderRadius="12px"
                    color={"#454545"}
                    fontWeight={"400"}
                    focusBorderColor="#121313"
                    className="urbanist"
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
                  border={"none"}
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
                  onClick={() => router.push("/recover-passwords")}
                  className="urbanist"
                >
                  Next
                </Button>
              </Box>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};
export default EmailSent;
