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

const RecoverPassword = () => {
    const router = useRouter()
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
        //   flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="white"
          pl={'6%'}
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
                    type="email"
                    placeholder="Input code sent to your email address"
                    h="52px"
                    borderRadius="12px"
                    color={"#454545"}
                    fontWeight={"400"}
                    focusBorderColor="#121313"
                    className="urbanist"
                  />
                  {/* <InputRightElement cursor="pointer">
                    <Image src="/assets/sms.png" w="5" alt="icon" pt="2" />
                  </InputRightElement> */}
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
                  onClick={()=> router.push('/reset-passwords')}
                  //   onClick={handleSendRecoveryEmail}
                  className="urbanist"
                  //   _hover={{
                  //     bg: isLoading ? "transparent" : "#1a202c",
                  //   }}
                  //   _active={{
                  //     bg: isLoading ? "transparent" : "#171923",
                  //   }}
                  //   disabled={isLoading}
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
export default RecoverPassword;
