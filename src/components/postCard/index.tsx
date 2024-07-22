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
  useToast,
} from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";
import AddPostModal from "../addPostModal";
import { useAppDispatch } from "@/redux/store";
import { deletePost } from "@/redux/features/allBlogs";
import UpdatePosts from "../updatePostModal";

interface PostCardProps {
  id: string;
  name: string;
  content: string;
  img: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, name, content, img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleDelete = async () => {
    try {
      await dispatch(deletePost(id)).unwrap();
      toast({
        title: "Blog deleted.",
        description: "Your blog has been deleted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",

      });
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: error as string,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",

      });
    }
  };

  return (
    <>
      <Box
        borderRadius="22px"
        p={4}
        width={"511px"}
        h="100%"
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
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt={`${name} img`}
          objectFit="contain"
          mx="auto"
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
        <UpdatePosts isOpen={isOpen} onClose={onClose} onOpen={onOpen} id={id}/>
      </Box>
    </>
  );
};

export default PostCard;
