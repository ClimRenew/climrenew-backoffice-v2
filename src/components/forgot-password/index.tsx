"use client";

import { requestForgotPassword } from "@/redux/features/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Image,
  Center,
  VStack,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EmailSent = () => {
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const toast = useToast();
  const router = useRouter();
  const { loading, error, message } = useAppSelector((state) => state.auth);

  const handleSubmit = async () => {
    const result = await dispatch(requestForgotPassword({ email }));
    if (requestForgotPassword.fulfilled.match(result)) {
      toast({
        title: "Success",
        description: "Reset code sent to your email",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/recover-passwords");
    } else if (requestForgotPassword.rejected.match(result)) {
      toast({
        title: "Error",
        description: result.payload,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
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
      <Box flex="1" display="flex" alignItems="center" justifyContent="center" bg="white">
        <VStack width="80%" spacing={4}>
          <Center mb="8">
            <Image src="/assets/climerenewLogo.png" alt="Logo" />
          </Center>
          <Flex flexDirection={"column"} justifyContent={"center"} gap={"6"}>
            <Text fontSize="30px" fontWeight="600" color={"#323130"} lineHeight={"39px"} className="urbanist" w="full">
              Forgot Password
            </Text>
            <FormControl>
              <FormLabel fontWeight="600" color={"#323130"} lineHeight={"21px"} fontSize={"14px"} w="full">
                Email
              </FormLabel>
              <Input
                type="email"
                placeholder="Input email address"
                h="52px"
                borderRadius="12px"
                color={"#454545"}
                fontWeight={"400"}
                focusBorderColor="#121313"
                className="urbanist"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Box width="full" display="flex" justifyContent="start" alignItems="center">
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
                onClick={handleSubmit}
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
  );
};

export default EmailSent;
