"use client";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Flex,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const AddServiceModal = ({ isOpen, onOpen, onClose }: any) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent mt={"10%"}>
          <ModalHeader
            className="montserrat"
            color={"#232323"}
            fontSize={"20px"}
            lineHeight={"30px"}
            fontWeight={"600"}
          >
            Create Service
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel
                className="inter"
                fontSize="16px"
                fontWeight={"500"}
                lineHeight={"30px"}
              >
                Name
              </FormLabel>
              <Input
                placeholder="e.g Climrenew"
                // value={companyName}
                // onChange={(e) => setCompanyName(e.target.value)}
                borderRadius={"8px"}
                border="1px solid #D9D9D9"
                className="inter"
              />
            </FormControl>
            <FormControl>
              <FormLabel
                className="inter"
                fontSize="16px"
                fontWeight={"500"}
                lineHeight={"30px"}
              >
                Image
              </FormLabel>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={4}
              >
                <Input
                  borderRadius={"8px"}
                  className="inter"
                  // onChange={handleFileChange}
                  border="1px solid #D9D9D9"
                  width="340px"
                />
                <Button
                  w={"100px"}
                  display={"flex"}
                  alignItems={"center"}
                  h="38px"
                  bg="#22C55E"
                  color="white"
                  className="montserrat"
                  fontSize={"16px"}
                  cursor={"pointer"}
                  borderRadius={"20px"}
                  // onClick={handleSubmit}
                >
                  Browse
                </Button>
              </Flex>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel
                className="inter"
                fontSize="16px"
                fontWeight={"500"}
                lineHeight={"30px"}
              >
                Key Word
              </FormLabel>
              <Input
                borderRadius={"8px"}
                border="1px solid #D9D9D9"
                className="inter"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel
                className="inter"
                fontSize="16px"
                fontWeight={"500"}
                lineHeight={"30px"}
              >
               Description
              </FormLabel>
              <Textarea
                borderRadius={"8px"}
                border="1px solid #D9D9D9"
                className="inter"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button
              w={"243px"}
              h="48px"
              bg="#22C55E"
              color="white"
              className="montserrat"
              fontSize={"20px"}
              fontWeight={"600"}
              cursor={"pointer"}
              borderRadius={"30px"}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddServiceModal;
