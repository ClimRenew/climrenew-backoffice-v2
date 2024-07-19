"use client";
import { Box, Text, Flex, useDisclosure, Grid, Link } from "@chakra-ui/react";
import Image from "next/image";
import FeatureCard from "../featureCard";

const ActivityContent = () => {
  return (
    <>
      <Box pl="8" pt={"12"} pb={"12"}>
        <Box
          as="button"
          bg="#22C55E"
          color={"#FFFFFF"}
          borderRadius={"30px"}
          h={"48px"}
          w={"204px"}
          display={"flex"}
          justifyContent={"center"}
          gap={"3"}
          alignItems={"center"}
          //   onClick={onOpen}
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
            whiteSpace={"nowrap"}
          >
            New Activities
          </Text>
        </Box>
        <Grid templateColumns={"repeat(3,1fr)"} gap={"8"} pt={"12"}>
          <FeatureCard
            name={"Green Consulting ?"}
            content={
              "We provide expert advice and guidance to businesses, organizations, and governments on how to operate in an environmentally responsible and sustainable manner. Our goal for green consulting is to help clients reduce their ecological footprint, minimize negative impacts on the environment, and achieve sustainability goals while maintaining profitability."
            }
            img={"/assets/green-consulting.png"}
          />
          <FeatureCard
            name={"Green Certification ?"}
            content={
              "We help companies navigate the process of obtaining green certifications by assessing their company's current operations, practices, gab analysis, strategy, implementation support documentation and reporting of environmental performance to identify areas where improvements can be made to meet the criteria of the desired green certification."
            }
            img={"/assets/green-certification.png"}
          />
          <FeatureCard
            name={"Climate Resilience ?"}
            content={
              "We help individuals, communities, organizations, and governments achieve climate resilience by providing expertise, guidance, and support in various in areas like Risk Assessment and Planning, Adaptation Planning and Implementation, Infrastructure Resilience and Community Engagement and Capacity Building."
            }
            img={"/assets/climate-resilience.png"}
          />
          <FeatureCard
            name={"Carbon Credit ?"}
            content={
              "Consultants can assist companies in assessing carbon credits by providing expertise and guidance in areas like Identification of Carbon Reduction Opportunities, Evaluation of Carbon Offsetting Projects, Carbon Credit Market Analysis and Certification and Verification Support."
            }
            img={"/assets/carbon-credit.png"}
          />
        </Grid>
      </Box>
    </>
  );
};
export default ActivityContent;
