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
import AddFaqModal from "../addFaqModal";

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
        <AddFaqModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

      </Box>
    </>
  );
};
export default FAQCard;
