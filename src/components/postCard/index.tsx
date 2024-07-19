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
import AddPostModal from "../addPostModal";

interface PostCardProps {
    name: string;
    content: string;
    img:string;
  }

const PostCard :React.FC<PostCardProps>= ({ name, content,img }) => {
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
        <Image
          src={img}
          alt={`${name} img`}
          // boxSize="150px"
          // w='240px'
          objectFit="contain"
          mx="auto"
          // mb={4}
          py={'4'}
        />
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
        <AddPostModal  isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>


      </Box>
        </>
    )
}
export default PostCard;