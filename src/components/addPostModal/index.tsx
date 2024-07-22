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
import { createPost } from "@/redux/features/allBlogs";

const AddPostModal = ({ isOpen, onOpen, onClose }: any) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", description);

    if (image) {
      formData.append("image", image);
    }

    try {
      await dispatch(createPost(formData)).unwrap();
      toast({
        title: "Blog created.",
        description: "Your blog has been created successfully, refresh to view",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",

      });
      onClose();
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
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent mt={"6%"} display={'flex'} justifyContent={'center'}>
        <ModalHeader
          className="montserrat"
          color={"#232323"}
          fontSize={"20px"}
          lineHeight={"30px"}
          fontWeight={"600"}
        >
          New Post
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel className="inter" fontSize="16px" fontWeight={"500"} lineHeight={"30px"}>
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
            <FormLabel className="inter" fontSize="16px" fontWeight={"500"} lineHeight={"30px"}>
              Image
            </FormLabel>
            <Flex justifyContent={"space-between"} alignItems={"center"} mb={4}>
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                borderRadius={"8px"}
                fontSize={'14px'}
                px={'1'}
                pt={'1'}
                className="inter"
                border="1px solid #D9D9D9"
                // width="340px"
              />
            </Flex>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel className="inter" fontSize="16px" fontWeight={"500"} lineHeight={"30px"}>
              Description
            </FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              borderRadius={"8px"}
              border="1px solid #D9D9D9"
              className="inter"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Button
            w={"243px"}
            h="48px"
            bg="#22C55E"
            color="white"
            className="montserrat"
            fontSize={"20px"}
            fontWeight={"600"}
            cursor={"pointer"}
            borderRadius={"30px"}
            onClick={handleSubmit}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddPostModal;
