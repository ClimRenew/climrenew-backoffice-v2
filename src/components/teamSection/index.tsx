import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Flex,
  } from "@chakra-ui/react";
  
  interface TeamProps {
    headingName:string;
}

const TeamSection:React.FC<TeamProps> = ({headingName}) => {
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
            {headingName}
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
            Name
            </FormLabel>
            <Input
              placeholder="e.g John Doe"
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
             Position
            </FormLabel>
            <Input
              placeholder="e.g COO"
              // w={"504px"}
              bg="white"
              focusBorderColor="#22C55E"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
            />
          </FormControl>
        </Box>

        <Box display="flex" gap={6} mb={4}>
        <FormControl id="image" flex="1">
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
                //   width="420px"
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
              placeholder="@COO"
              // w={"504px"}
              focusBorderColor="#22C55E"
              bg="white"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
            />
          </FormControl>

        
        </Box>
        <Box display="flex" gap={6} mb={4}>
          <FormControl id="header" flex="1">
            <FormLabel
              color={"#232323"}
              fontSize={"16px"}
              className="inter"
              fontWeight={"500"}
              lineHeight={"30px"}
            >
           Instagram
            </FormLabel>
            <Input
              placeholder="e.g John Doe"
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
            Linkedin
            </FormLabel>
            <Input
              placeholder="e.g COO"
              // w={"504px"}
              bg="white"
              focusBorderColor="#22C55E"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={6} mb={4}>
          <FormControl id="header" flex="1">
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
              placeholder="e.g John Doe"
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
          Git Hub
            </FormLabel>
            <Input
              placeholder="e.g COO"
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
          <FormControl id="tagline" width="520px">
            <FormLabel
              color="#232323"
              className="inter"
              fontSize="16px"
              fontWeight="500"
              lineHeight="30px"
            >
             Bio
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
    )
}
export default TeamSection;