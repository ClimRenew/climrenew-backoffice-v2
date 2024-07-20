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
  Badge,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { FiMoreHorizontal, FiMoreVertical } from "react-icons/fi";

interface TicketCardProps {
  name: string;
  content: string;
  img: string;
  roleHeading: string;
  durations: any;
  status: "opened" | "closed" | "responded";
}

const TicketCard: React.FC<TicketCardProps> = ({
  name,
  content,
  img,
  roleHeading,
  durations,
  status,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const statusColors = {
    opened: "#CEFFE0",
    responded: "#FEFFCE",
    closed: "#FFE3E3",
  };

  const statusTextColors = {
    opened: "#1D8D47",
    responded: "#C2C522",
    closed: "#FF1D1D",
  };
  return (
    <>
      <Box
        borderRadius="22px"
        p={4}
        width={"511px"}
        // height={"150px"}
        bg="#FFFFFF"
      >
        <VStack align="start" spacing={3}>
          <HStack justify="space-between" width="100%">
            <Flex
              justifyContent={"space-between"}
              alignContent={"center"}
              w="full"
            >
              <Text
                fontSize="26px"
                fontWeight="500"
                lineHeight={"31.47px"}
                color="#303030"
                className="inter"
              >
                {roleHeading}
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
          </HStack>

          <Flex
            justifyContent={"space-between"}
            alignContent={"center"}
            w="full"
          >
            <Text
              color="#3B3B3B"
              fontWeight={"500"}
              fontSize={"18px"}
              lineHeight={"27px"}
              className="urbanist"
            >
              {durations}
            </Text>

            <Text
              bg={statusColors[status]}
              // width="74px"
              h={'26px'}
                  borderRadius="8px"
                  p="3px 8px 3px 8px"
                  textAlign="center"

              color={statusTextColors[status]}
           
            >
              {status.charAt(0).toUpperCase() +
                    status.slice(1)}
            </Text>
          </Flex>
          <Divider />
          <Text
            color={"#303030"}
            fontWeight={"500"}
            fontSize={"18px"}
            lineHeight={"27px"}
            className="inter"
          >
            <Text as="span">Name:</Text> {name}
          </Text>
          <Divider />
          <Text
            color={"#303030"}
            fontSize={"18px"}
            fontWeight={"500"}
            lineHeight={"27px"}
            className="inter"
          >
            {content}
          </Text>
          <Divider />
          {/* <Box  backgroundColor="gray.100" borderRadius="md" width="100%"></Box>
           */}
          <Image src={img} alt="img" />
        </VStack>
      </Box>
    </>
  );
};
export default TicketCard;
