import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const ContactInformation = () => {
    return (
        <>

        <Box>
        <Box display="flex" gap={6} mb={4}>
          <FormControl id="header" flex="1">
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
              Email
            </FormLabel>
            <Input
              placeholder="Together We Can Restore Our"
              // w={"504px"}
              focusBorderColor="#22C55E"
              bg="white"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
            />
          </FormControl>

          <FormControl id="headerLastWord" flex="1">
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
             Phone number
            </FormLabel>
            <Input
              placeholder="Planet"
              // w={"504px"}
              bg="white"
              focusBorderColor="#22C55E"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
            />
          </FormControl>
        </Box>
        <FormControl id="tagline" width='520px'>
            <FormLabel
              color="#232323"
              className="inter"
              fontSize="16px"
              fontWeight="500"
              lineHeight="30px"
            >
              Address
            </FormLabel>
            <Textarea
              border="1px solid #D9D9D9"
              borderRadius={"8px"}
              bg="white"
              color="#3B3B3B"
              fontSize="14px"
              className="inter"
              focusBorderColor="#22C55E"
              fontWeight="400"
              lineHeight="20px"
              placeholder="Our commitment lies in facilitating businesses, NGOs, and corporations in achieving their ESG goals by connecting their teams with green technology solution providers."
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
        </Box>
        </>
    )
}
export default ContactInformation;