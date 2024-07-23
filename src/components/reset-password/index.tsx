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

const ResetPassword = () => {
  const router = useRouter();

  return (
    <>
      <Flex>
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
            spacing={4}
            width={{ lg: "540px", xxl: "540px", sm: "full", md: "full" }}
          >
            <Center mb="8">
              <Image src="/assets/climerenewLogo.png" alt="Logo" />
            </Center>
            <Box width="full">
              <Text
                color="#323130"
                fontSize="30px"
                fontWeight="600"
                className="urbanist"
                lineHeight={"39px"}
              >
                Set New Password
              </Text>
              <Text
                color="#737373"
                fontSize="14px"
                fontWeight="400"
                lineHeight="21px"
                width="full"
                className="urbanist"
                pb={{ sm: "10", lg: "0" }}
              >
                Please enter your new password twice below to confirm.
              </Text>
            </Box>
            <FormControl>
              <FormLabel
                fontWeight="600"
                color={"#323130"}
                lineHeight={"21px"}
                fontSize={"14px"}
                w={{ lg: "540px", xxl: "600px", xlg: "540px", sm: "full" }}
              >
                New Password
              </FormLabel>
              <InputGroup
                w={{ lg: "540px", xxl: "600px", xlg: "540px", sm: "full" }}
              >
                <Input
                  // type={showPassword ? "text" : "password"}
                  placeholder="* * * * * *"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  h="52px"
                  borderRadius="12px"
                  className="urbanist"
                  focusBorderColor="#121313"
                />
                {/* <InputRightElement
                cursor="pointer"
                // onClick={togglePasswordVisibility}
              >
                <Image
                  src={
                    showPassword ? "/assets/eye.png" : "/assets/eye-slash.png"
                  }
                  w={5}
                  alt="icon"
                  pt="2"
                />
              </InputRightElement> */}
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel
                fontWeight="600"
                color={"#323130"}
                lineHeight={"21px"}
                fontSize={"14px"}
                w="full"
              >
                Confirm New Password
              </FormLabel>
              <InputGroup
                w={{ lg: "540px", xxl: "600px", xlg: "540px", sm: "full" }}
              >
                <Input
                  // type={showConfirmPassword ? "text" : "password"}
                  placeholder="* * * * * *"
                  // value={confirmPassword}
                  // onChange={(e) => setConfirmPassword(e.target.value)}
                  h="52px"
                  borderRadius="12px"
                  className="urbanist"
                  focusBorderColor="#121313"
                />
                {/* <InputRightElement
                cursor="pointer"
                // onClick={toggleConfirmPasswordVisibility}
              >
                <Image
                //   src={
                //     showConfirmPassword
                //       ? "/assets/eye.png"
                //       : "/assets/eye-slash.png"
                //   }
                  w={5}
                  pt="2"
                  alt="icon"
                />
              </InputRightElement> */}
              </InputGroup>
            </FormControl>
            <Box
              width=""
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={{ sm: "4" }}
            >
              <Button
                borderRadius="12px"
                bg={"#22C55E"}
                color={"white"}
                //   border={isLoading ? "1px solid black" : "none"}
                //   color={isLoading ? "black" : "white"}
                h="54px"
                w={{
                  lg: "540px",
                  xxl: "600px",
                  xlg: "540px",
                  sm: "360px",
                  md: "670px",
                }}
                fontWeight="600"
                fontSize="14px"
                //   onClick={handleSignUp}
                //   disabled={isLoading}
                className="urbanist"
                _hover={{
                  bg: "#1a202c",
                }}
                _active={{
                  bg: "#171923",
                }}
              >
                {/* {isLoading ? (
                <Spinner size="sm" color="black" />
              ) : (
                "Reset Password"
              )} */}
                Reset Password
              </Button>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};
export default ResetPassword;
