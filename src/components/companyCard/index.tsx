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
          <MenuList
                width="89px"
                minWidth="89px"
                sx={{ zIndex: 1 }}
                p={0}
                m={0}
                bg="#F9F9F9"
              >
                <Box
                  w={"89px"}
                  bg="#F9F9F9"
                  color="#303030"
                  borderRadius={"8px"}
                  fontSize={"16px"}
                  className="inter"
                  fontWeight={"500"}
                  textAlign={"center"}
                >
                  <Text py={"2"} cursor={"pointer"} onClick={onOpen}>
                    Update
                  </Text>
                  <Text cursor={"pointer"} pb={"2"}>
                    Delete
                  </Text>
                </Box>
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
