import { Flex, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const AddAdministrator = () => {
    return (
        <>
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
              Role
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
              Email
            </FormLabel>
            <Input placeholder="binkap@binkap.com" 
             focusBorderColor="#22C55E"
             bg="white"
             border="1px solid #D9D9D9"
             h={"48px"}
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
         Add Administrator
        </Button>
        </>
    )
}
export default AddAdministrator;