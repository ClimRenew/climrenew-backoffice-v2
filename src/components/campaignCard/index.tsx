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
import AddCampaignModal from "../addCampaignModal";

interface FeatureCardProps {
  name: string;
  content: string;
  img: string;
}

const  CampaignCard: React.FC<FeatureCardProps> = ({ name, img, content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderRadius="22px"
        p={4}
        // maxW="319px"
        w="319px"
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
            color={'#303030'}
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
            color={'#303030'}
            pt={"6"}
          >
            {content}
          </Text>
        </Box>
        <AddCampaignModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        
      </Box>
    </>
  );
};
export default CampaignCard;
