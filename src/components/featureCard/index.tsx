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
import AddServiceModal from "../addServiceModal";
import { useRouter } from "next/navigation";
import AddFeatureModal from "../addFeatureModal";

interface FeatureCardProps {
  name: string;
  content: string;
  img: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ name, img, content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderRadius="22px"
        p={4}
        maxW="319px"
        w="100%"
        bg="#FFFFFF"
        boxSizing="border-box"
        m={"0"}
        // border={'1px solid red'}
        // bg='red'
      >
        <Flex justifyContent={"space-between"} alignContent={"center"}>
          <Text
            className="inter"
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"24.2px"}
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
        <Box pt={"4"}>
          <Image
            src={img}
            alt={`${name} img`}
            // boxSize="150px"
            // w='240px'
            objectFit="contain"
            mx="auto"
            // mb={4}
          />
          <Text
            fontWeight="400"
            textAlign="start"
            fontSize="16px"
            lineHeight={"23px"}
            className="inter"
            pt={"6"}
          >
            {content}
          </Text>
        </Box>
        <AddFeatureModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        
      </Box>
    </>
  );
};
export default FeatureCard;
