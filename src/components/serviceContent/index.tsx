"use client";
import { Box, Text, Flex, useDisclosure, Grid, Link } from "@chakra-ui/react";
import Image from "next/image";
import AddServiceModal from "../addServiceModal";
import ServiceCard from "../serviceCard";
import { useRouter } from "next/navigation";

const ServiceContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
            Add New Service
          </Text>
        </Box>
        <Grid
          templateColumns={"repeat(2,1fr)"}
          gap="8"
          pr={"4"}
          pt={"12"}
          pb={"12"}
      width={"511px"}

        >
          <Link href='/services/1' textDecoration={'none'}>
            <ServiceCard
              name={"Renewable Energy Consulting"}
              img={"/assets/recycle.png"}
              content="We offer specialized guidance, analysis, and assistance to clients across different facets of renewable energy advancement, deployment, and enhancement, aiming to assist them in attaining a more sustainable output through a compre..."          />
          </Link>
          <ServiceCard
            name={"Sustainable Agriculture"}
            img="/assets/agric.png"
            content="We help play the role of facilitators, educators, and strategists in promoting sustainable agriculture practices, fostering resilience, and contributing to the transition towards a more sustainable and equitable food system...."         />
          <ServiceCard
            name={"Plastic Waste Consulting"}
            img="/assets/plastic.png"
            content="We play a role in helping organizations and communities address the complex challenges associated with plastic pollution by providing expertise, guidance, and innovative solutions to promote a more sustainable and circular approac..."          />
        </Grid>
        <AddServiceModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>
    </>
  );
};
export default ServiceContent;
