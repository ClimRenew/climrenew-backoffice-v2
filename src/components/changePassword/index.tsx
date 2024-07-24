import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

const ChangeUserPassword = () => {
  return (
    <Box pt={"4"}>
      {/* <Flex wrap="wrap" justify="space-between" pt="2"> */}
      <FormControl width={["100%", "48%"]} mb={4}>
        <FormLabel
          color={"#232323"}
          fontSize={"16px"}
          className="inter"
          fontWeight={"500"}
          lineHeight={"30px"}
        >
          Old Password
        </FormLabel>
        <Input
          placeholder="****"
          focusBorderColor="#22C55E"
          bg="white"
          type="password"
          border="1px solid #D9D9D9"
          h={"48px"}
          borderRadius={"8px"}
        />
      </FormControl>
      <FormControl width={["100%", "48%"]} mb={4}>
        <FormLabel
          color={"#232323"}
          fontSize={"16px"}
          className="inter"
          fontWeight={"500"}
          lineHeight={"30px"}
        >
          New Password
        </FormLabel>
        <Input
          placeholder="****"
          focusBorderColor="#22C55E"
          bg="white"
          border="1px solid #D9D9D9"
          h={"48px"}
          type="password"
          borderRadius={"8px"}
        />
      </FormControl>
      <FormControl width={["100%", "48%"]} mb={4}>
        <FormLabel
          color={"#232323"}
          fontSize={"16px"}
          className="inter"
          fontWeight={"500"}
          lineHeight={"30px"}
        >
          Confirm New Password
        </FormLabel>
        <Input
          placeholder="****"
          focusBorderColor="#22C55E"
          bg="white"
          type="password"
          border="1px solid #D9D9D9"
          h={"48px"}
          borderRadius={"8px"}
        />
      </FormControl>
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
      {/* </Flex> */}
    </Box>
  );
};
export default ChangeUserPassword;
