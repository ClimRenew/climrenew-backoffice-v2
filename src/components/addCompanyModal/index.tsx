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
} from "@chakra-ui/react";
import { useState } from "react";

const AddCompanyModal = ({ isOpen, onOpen, onClose }: any) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState(null);

  const handleFileChange = ({ event }: any) => {
    setLogo(event.target.files[0]);
  };

  const handleSubmit = () => {
    // handle form submission
    onClose();
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Add New Company</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent mt={"14%"}>
          <ModalHeader className="montserrat">Add New Company</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel
                className="inter"
                fontSize="16px"
                fontWeight={"500"}
                lineHeight={"30px"}
              >
                Company Name
              </FormLabel>
              <Input
                placeholder="e.g Climrenew"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                borderRadius={"8px"}
                border='1px solid #D9D9D9'

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
                  Logo
                </FormLabel>
            <Flex justifyContent={"space-between"} alignItems={"center"} >
                <Input
                  borderRadius={"8px"}
                  className="inter"
                  onChange={handleFileChange}
                  border='1px solid #D9D9D9'
                  width="340px"
                />
                  <Button
                w={"100px"}
                display={'flex'}
                alignItems={'center'}
                h="38px"
                bg="#22C55E"
                color="white"
                className="montserrat"
                fontSize={"16px"}
                borderRadius={"20px"}
                // onClick={handleSubmit}
              >
                Browse
              </Button>
            </Flex>

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

export default AddCompanyModal;
