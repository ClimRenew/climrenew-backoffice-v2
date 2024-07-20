import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
} from "@chakra-ui/react";

const SocialLinks = () => {
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
             Twitter
            </FormLabel>
            <Input
              placeholder="https://twitter.com/climrenew/status/1729395489798312026"
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
              Facebook
            </FormLabel>
            <Input
              placeholder="https://web.facebook.com/climrenew/?_rdc=1&_rdr"
              // w={"504px"}
              bg="white"
              focusBorderColor="#22C55E"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
            />
          </FormControl>
        </Box>
        <Flex gap={6} mb={4}>
          <FormControl id="tagline" flex="1">
            <FormLabel
              color="#232323"
              className="inter"
              fontSize="16px"
              fontWeight="500"
              lineHeight="30px"
            >
              Instagram
            </FormLabel>
            <Input
              placeholder="https://www.instagram.com/climrenew/"
              // w={"504px"}
              bg="white"
              focusBorderColor="#22C55E"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
            />
          </FormControl>

          <FormControl id="campaignTagline" flex="1">
            <FormLabel
              color="#232323"
              fontSize="16px"
              className="inter"
              fontWeight="500"
              lineHeight="30px"
            >
             Linkedin
            </FormLabel>
            <Input
              // w={"504px"}
              placeholder="https://www.linkedin.com/company/climrenew/?viewAsMember=true"
              focusBorderColor="#22C55E"
              bg="white"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
            />
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
    </>
  );
};
export default SocialLinks;
