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
      <Box borderRadius="22px" p={4} width={"511px"} h="100%" bg="#FFFFFF">
        <Flex justifyContent={"space-between"} alignContent={"center"}>
          <Text
            className="inter"
            fontSize={"26px"}
            fontWeight={"500"}
            color="#303030"
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
                  <Text onClick={handleDelete} cursor={"pointer"} pb={"2"}>
                    Delete
                  </Text>
                </Box>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt={`${name} img`}
          objectFit="contain"
          mx="auto"
          py={"4"}
        />
        <Box
          fontWeight="500"
          textAlign="start"
          fontSize="18px"
          lineHeight={"27px"}
          className="urbanist"
          color={"#3B3B3B"}
          pt={"6"}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <UpdatePosts
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          id={id}
        />
      </Box>
    </>
  );
};

export default PostCard;
