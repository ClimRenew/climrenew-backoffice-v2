import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
} from "@chakra-ui/react";

interface Props {
  headingNumber: string;
}

const AchievementSection: React.FC<Props> = ({ headingNumber }) => {
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
              placeholder="Projects"
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
               Count
            </FormLabel>
            <Input
              placeholder="10"
              // w={"504px"}
              bg="white"
              focusBorderColor="#22C55E"
              border="1px solid #D9D9D9"
              h={"48px"}
              borderRadius={"8px"}
            />
          </FormControl>
        </Box>
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
export default AchievementSection;
