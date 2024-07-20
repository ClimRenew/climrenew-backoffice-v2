"use client";
import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import CompanyCard from "../companyCard";
import AddCompanyModal from "../addCompanyModal";

const FeatureContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        onClick={onOpen}
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
      <Flex flexWrap='wrap' gap={"4"} pt={"12"} pr={"4"} 
      >
        <CompanyCard name={"Watson Institute"} logo={"/assets/image2.png"} />
        <CompanyCard
          name={"Captain Planet Foundation"}
          logo={"/assets/image3.png"}
        />
        <CompanyCard
          name={"Itech Energy Company"}
          logo={"/assets/image4.png"}
        />
        <CompanyCard name={"CrowdSolve"} logo={"/assets/image5.png"} />
      </Flex>
      <AddCompanyModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Box>
  );
};
export default FeatureContent;
