'use client'

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
    useDisclosure
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const AddCompanyModal = ({isOpen,onOpen,onClose}:any) => {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const [companyName, setCompanyName] = useState("");
    const [logo, setLogo] = useState(null);
  
    const handleFileChange = ({event}:any) => {
      setLogo(event.target.files[0]);
    };
  
    const handleSubmit = () => {
      // handle form submission
      onClose();
    };
  
    return (
      <>
        {/* <Button onClick={onOpen}>Add New Company</Button> */}
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Company</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Company Name</FormLabel>
                <Input
                  placeholder="e.g Climrenew"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Logo</FormLabel>
                <Input type="file" onChange={handleFileChange} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" onClick={handleSubmit}>
                Create
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default AddCompanyModal;
  