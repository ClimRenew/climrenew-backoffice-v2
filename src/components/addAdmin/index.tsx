"use client";

import { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  useToast,
  Spinner,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { requestAddAdministrator } from "@/redux/features/addAdmin";

const AddAdministrator = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { loading, error, message, validationErrors } = useAppSelector((state) => state.admin);

  const handleAddAdministrator = () => {
    dispatch(requestAddAdministrator({ name, role, email })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast({
          title: "Success",
          description: message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setName("");
        setRole("");
        setEmail("");
      } else {
        toast({
          title: "Error",
          description: error,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <>
      <Flex wrap="wrap" justify="space-between" pt="2">
        <FormControl width={["100%", "48%"]} mb={4} isInvalid={!!validationErrors?.name}>
          <FormLabel color="#232323" fontSize="16px" fontWeight="500" lineHeight="30px">
            Full Name
          </FormLabel>
          <Input
            placeholder="John Doe"
            focusBorderColor="#22C55E"
            bg="white"
            border="1px solid #D9D9D9"
            h="48px"
            borderRadius="8px"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormErrorMessage>{validationErrors?.name?.[0]}</FormErrorMessage>
        </FormControl>
        <FormControl width={["100%", "48%"]} mb={4} isInvalid={!!validationErrors?.role}>
          <FormLabel color="#232323" fontSize="16px" fontWeight="500" lineHeight="30px">
            Role
          </FormLabel>
          <Input
            placeholder="e.g COO"
            focusBorderColor="#22C55E"
            bg="white"
            border="1px solid #D9D9D9"
            h="48px"
            borderRadius="8px"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <FormErrorMessage>{validationErrors?.role?.[0]}</FormErrorMessage>
        </FormControl>
        <FormControl width={["100%", "48%"]} mb={4} isInvalid={!!validationErrors?.email}>
          <FormLabel color="#232323" fontSize="16px" fontWeight="500" lineHeight="30px">
            Email
          </FormLabel>
          <Input
            placeholder="binkap@binkap.com"
            focusBorderColor="#22C55E"
            bg="white"
            border="1px solid #D9D9D9"
            h="48px"
            borderRadius="8px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormErrorMessage>{validationErrors?.email?.[0]}</FormErrorMessage>
        </FormControl>
      </Flex>
      <Button
        w="243px"
        h="48px"
        bg="#22C55E"
        color="white"
        fontSize="20px"
        fontWeight="600"
        borderRadius="30px"
        onClick={handleAddAdministrator}
        isLoading={loading}
      >
        Add Administrator
      </Button>
      {error && (
        <Text color="red.500" mt="4">
          {error}
        </Text>
      )}
    </>
  );
};

export default AddAdministrator;
