import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
} from "@chakra-ui/react";

interface HomeProps {
    headingNumber:string;
}

const HomeInformation:React.FC<HomeProps> = ({headingNumber}) => {
  return (
    <>
      <Box>
        <FormControl id="header1" mb={4}>
          <FormLabel
            color={"#303030"}
            fontSize={"26px"}
            className="inter"
            fontWeight={"500"}
            pt={"4"}
            pb={"2"}
            lineHeight={"31.47px"}
          >
           {headingNumber}
          </FormLabel>
        </FormControl>

        <Box display="flex" gap={6} mb={4}>
          <FormControl id="header" flex="1">
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
              Header
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
              Header Last Word
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
        <Flex gap={6} mb={4}>
          <FormControl id="tagline" flex="1">
            <FormLabel
              color="#232323"
              className="inter"
              fontSize="16px"
              fontWeight="500"
              lineHeight="30px"
            >
              Tagline
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

          <FormControl id="campaignTagline" flex="1">
            <FormLabel
              color="#232323"
              fontSize="16px"
              className="inter"
              fontWeight="500"
              lineHeight="30px"
            >
              Campaign Tagline
            </FormLabel>
            <Input
              // w={"504px"}
              focusBorderColor="#22C55E"
              bg="white"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
            />
          </FormControl>
        </Flex>

        {/* <Box display="flex" gap={4} mb={4}> */}
        <FormControl id="image">
          <FormLabel
            color={"#232323"}
            fontSize={"16px"}
            className="inter"
            fontWeight={"500"}
            lineHeight={"30px"}
          >
            Image
          </FormLabel>
          <Flex justifyContent={"start"} gap={"3"} alignItems={"center"}>
            <Input
              bg="white"
              focusBorderColor="#22C55E"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
              width="420px"
            />
            <Button
              w={"100px"}
              display={"flex"}
              alignItems={"center"}
              h="38px"
              bg="#22C55E"
              color="white"
              className="montserrat"
              fontSize={"16px"}
              cursor={"pointer"}
              borderRadius={"20px"}
              // onClick={handleSubmit}
            >
              Browse
            </Button>
          </Flex>
        </FormControl>

        {/* </Box> */}

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
export default HomeInformation;
