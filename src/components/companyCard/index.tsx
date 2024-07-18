"use client";
import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMoreHorizontal, FiMoreVertical } from "react-icons/fi";
import AddCompanyModal from "../addCompanyModal";

interface ComapanyCardProps {
  name: string;
  logo: string;
}

const CompanyCard: React.FC<ComapanyCardProps> = ({ name, logo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      borderRadius="22px"
      p={4}
      width={"319px"}
      height={"312px"}
      bg="#FFFFFF"
    >
      <Flex justifyContent={"end"}>
        <Menu>
          <MenuButton
            as={Button}
            w="17px"
            h="16px"
            bg="#F9F9F9"
            rightIcon={<FiMoreHorizontal />}
          ></MenuButton>
          <MenuList>
            <MenuItem onClick={onOpen}>Update</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box pt={"2"}>
        <Image
          src={logo}
          alt={`${name} logo`}
          boxSize="150px"
          // w='240px'
          objectFit="contain"
          mx="auto"
          // mb={4}
        />
        <Text
          fontWeight="500"
          textAlign="center"
          fontSize="26px"
          lineHeight={"31.47px"}
          className="inter"
          pt={"6"}
        >
          {name}
        </Text>
      </Box>
      <AddCompanyModal 
      isOpen={isOpen}
      onClose={onClose}
      onOpen/>
    </Box>
  );
};

export default CompanyCard;
