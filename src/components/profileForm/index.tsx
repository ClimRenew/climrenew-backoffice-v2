import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Image,
} from "@chakra-ui/react";
// import image from "next/image";

const ProfileForm = () => {
  return (
    <>
      {/* <Flex justify="center" align="center" minH="100vh" bg="gray.50"> */}
      <Box p={8}>
        <Flex
          direction="row"
          gap={"3"}
          align="center"
          justifyContent={"start"}
          mb={4}
        >
          <Box mb={4}>
            <Image
              borderRadius="full"
              //   boxSize="100px"
              src='/assets/profile-update.png'
              alt="Profile Image"
            />
          </Box>
          <Button
            // as="label"
            // htmlFor="image-upload"
            cursor="pointer"
            bg="#D4FEE3"
            className="urbanist"
            borderRadius={"30px"}
            color="#22C55E"
            // _hover={{ bg: "green.200" }}
          >
            Upload Image
          </Button>
          <Input
            type="file"
            id="image-upload"
            accept="image/*"
            // onChange={handleImageUpload}
            display="none"
          />
        </Flex>
        <Flex wrap="wrap" justify="space-between" pt="2">
          <FormControl width={["100%", "48%"]} mb={4}>
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
              Full Name
            </FormLabel>
            <Input placeholder="John Doe" 
             focusBorderColor="#22C55E"
             bg="white"
             border="1px solid #D9D9D9"
             h={"48px"}
             borderRadius={"8px"}/>
          </FormControl>
          <FormControl width={["100%", "48%"]} mb={4}>
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
              Position
            </FormLabel>
            <Input placeholder="e.g COO" 
             focusBorderColor="#22C55E"
             bg="white"
             border="1px solid #D9D9D9"
             h={"48px"}
             borderRadius={"8px"} />
          </FormControl>
          <FormControl width={["100%", "48%"]} mb={4}>
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
              Twitter
            </FormLabel>
            <Input placeholder="https://twitter.com/yourhandle" 
             focusBorderColor="#22C55E"
             bg="white"
             border="1px solid #D9D9D9"
             h={"48px"}
             borderRadius={"8px"}/>
          </FormControl>
          <FormControl width={["100%", "48%"]} mb={4}>
            <FormLabel>LinkedIn</FormLabel>
            <Input placeholder="https://www.linkedin.com/in/yourprofile" 
             focusBorderColor="#22C55E"
             bg="white"
             border="1px solid #D9D9D9"
             h={"48px"}
             borderRadius={"8px"}/>
          </FormControl>
          <FormControl width={["100%", "48%"]} mb={4}>
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
              Instagram
            </FormLabel>
            <Input placeholder="https://instagram.com/yourhandle" 
             focusBorderColor="#22C55E"
             bg="white"
             border="1px solid #D9D9D9"
             h={"48px"}
             borderRadius={"8px"}/>
          </FormControl>
          <FormControl width={["100%", "48%"]} mb={4}>
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
              Facebook
            </FormLabel>
            <Input placeholder="https://facebook.com/yourprofile" 
             focusBorderColor="#22C55E"
             bg="white"
             border="1px solid #D9D9D9"
             h={"48px"}
             borderRadius={"8px"}/>
          </FormControl>
          <FormControl width={["100%", "48%"]} mb={4}>
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
              Github
            </FormLabel>
            <Input placeholder="https://github.com/yourhandle" 
             focusBorderColor="#22C55E"
             bg="white"
             border="1px solid #D9D9D9"
             h={"48px"}
             borderRadius={"8px"} />
          </FormControl>
          <FormControl width={["100%", "48%"]} mb={4}>
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
              Bio
            </FormLabel>
            <Textarea placeholder="Write here..." 
             focusBorderColor="#22C55E"
             bg="white"
             border="1px solid #D9D9D9"
            //  h={"48px"}
             borderRadius={"8px"}/>
          </FormControl>
        </Flex>
        <Button
          w={"243px"}
          h="48px"
          bg="#22C55E"
          color="white"
          className="montserrat"
          my={"10"}
          fontSize={"20px"}
          fontWeight={"600"}
          cursor={"pointer"}
          borderRadius={"30px"}
        >
          Update
        </Button>
      </Box>
      {/* </Flex> */}
    </>
  );
};
export default ProfileForm;
