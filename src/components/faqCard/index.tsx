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

interface FAQCardProps {
  name: string;
  content: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ name, content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderRadius="22px"
        p={4}
        width={"511px"}
        // height={"150px"}
        bg="#FFFFFF"
      >
        <Flex justifyContent={"space-between"} alignContent={"center"}>
          <Text
            className="inter"
            fontSize={"26px"}
            fontWeight={"500"}
            color='#303030'
            lineHeight={"31.47px"}
          >
            {name}
          </Text>
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
        </Flex>
        <Text
          fontWeight="500"
          textAlign="start"
          fontSize="18px"
          lineHeight={"27px"}
          className="urbanist"
          color={'#3B3B3B'}
          pt={"6"}
        >
          {content}
        </Text>
      </Box>
    </>
  );
};
export default FAQCard;
