import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Flex,
    Textarea,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useAppDispatch } from "@/redux/store";
  import { updatePost } from "@/redux/features/allBlogs"; // Ensure this import is correct
  
  const UpdatePosts = ({ isOpen, onOpen, onClose, id, initialTitle, initialBody, initialImage }:any) => {
    const dispatch = useAppDispatch();
    const toast = useToast();
    const [title, setTitle] = useState(initialTitle);
    const [body, setBody] = useState(initialBody);
    const [image, setImage] = useState<File | null>(null);
  
    const handleUpdate = async () => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("body", body);
  
      if (image) {
        formData.append("image", image);
      }
  
      try {
        await dispatch(updatePost({ id, formData })).unwrap();
        toast({
          title: "Blog updated.",
          description: "Your blog has been updated successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        onClose();
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: "Unable to update blog. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent mt={"6%"} display={"flex"} justifyContent={"center"}>
          <ModalHeader
            className="montserrat"
            color={"#232323"}
            fontSize={"20px"}
            lineHeight={"30px"}
            fontWeight={"600"}
          >
            Update Post
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel
                className="inter"
                fontSize="16px"
                fontWeight={"500"}
                lineHeight={"30px"}
              >
                Header
              </FormLabel>
              <Input
                placeholder="e.g Climrenew"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                borderRadius={"8px"}
                border="1px solid #D9D9D9"
                className="inter"
              />
            </FormControl>
            <FormControl>
              <FormLabel
                className="inter"
                fontSize="16px"
                fontWeight={"500"}
                lineHeight={"30px"}
              >
                Image
              </FormLabel>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={4}
              >
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  borderRadius={"8px"}
                  className="inter"
                  border="1px solid #D9D9D9"
                  width="340px"
                />
              </Flex>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel
                className="inter"
                fontSize="16px"
                fontWeight={"500"}
                lineHeight={"30px"}
              >
                Description
              </FormLabel>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                borderRadius={"8px"}
                border="1px solid #D9D9D9"
                className="inter"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button
              onClick={handleUpdate}
              w={"243px"}
              h="48px"
              bg="#22C55E"
              color="white"
              className="montserrat"
              fontSize={"20px"}
              fontWeight={"600"}
              cursor={"pointer"}
              borderRadius={"30px"}
            >
              Update Blog
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  export default UpdatePosts;
  