import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const FeatureContent = () => {
  return (
    <Box pl="8" pt={"12"} pb={"12"}>
      <Box
        as="button"
        bg="#22C55E"
        color={"#FFFFFF"}
        borderRadius={"30px"}
        h={"48px"}
        w={"254px"}
        display={"flex"}
        justifyContent={"center"}
        gap={"3"}
        alignItems={"center"}
      >
        <Image
          src="/assets/plusIconWhite.png"
          alt="search icon"
          width={20}
          height={20}
          quality={100}
        />
        <Text
          fontSize={"20px"}
          lineHeight={"24px"}
          fontWeight={"600"}
          className="urbanist"
        >
          Add New Company
        </Text>
      </Box>
      
    </Box>
  );
};
export default FeatureContent;
