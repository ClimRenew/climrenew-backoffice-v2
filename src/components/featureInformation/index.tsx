import { Box, Button, Text, Flex,Grid } from "@chakra-ui/react";
import Image from "next/image";
import FeatureCard from "../featureCard";
const FeatureInformation = () => {
  return (
    <>
      <Box pl="8" pt={"6"} pb={"12"} pr={"4"}>
        <Button display="flex" gap="3" alignItems={"center"} bg={"transparent"}>
          <Image
            src="/assets/leftArrow.png"
            alt="back arrow"
            width={20}
            height={20}
            quality={90}
          />
          <Text
            className="urbanist"
            fontWeight={"600"}
            fontSize={"20px"}
            lineHeight={"24px"}
          >
            Back
          </Text>
        </Button>
        <Flex justifyContent="end">
          <Box
            as="button"
            bg="#22C55E"
            color={"#FFFFFF"}
            borderRadius={"30px"}
            h={"48px"}
            w={"188px"}
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
            >
              Add Feature
            </Text>
          </Box>
        </Flex>
        <Grid templateColumns={'repeat(3,1fr)'} gap={'8'} pt={'12'}>
            
            <FeatureCard name={"Conducting Feasibility Studies"} content={"We undertake feasibility studies to evaluate the potential success of renewable energy projects. This encompasses assessing factors like resource availability (e.g., solar irradiation, wind speeds), site suitability, technology options, regulatory requisites, financial considerations, and environmental impacts."} img={"/assets/blank.png"}/>
            <FeatureCard name={"Performing Resource Assessments"} content={"We conduct comprehensive resource assessments to quantify the renewable energy potential at specific locations. We also analyze data such as solar irradiance for solar projects or wind speeds for wind projects to optimize project designs and maximize energy production."} img={"/assets/blank.png"}/>
            <FeatureCard name={"Assisting with Technology Selection and Procurement"} content={"We aid clients in selecting the most suitable renewable energy technologies based on project requirements, site conditions, and budget constraints while providing guidance on equipment procurement and vendor selection to ensure quality, reliability, and cost-effectiveness."} img={"/assets/blank.png"}/>
            <FeatureCard name={"Supporting Project Development"} content={"We offer support throughout the entire project development process, from site selection to commissioning. This includes activities such as land acquisition, regulatory compliance, grid interconnection, stakeholder engagement, and project management."} img={"/assets/blank.png"}/>
            <FeatureCard name={"Addressing Grid Integration Challenges and PPAs :"} content={"We advise clients on addressing grid integration challenges associated with renewable energy projects, such as intermittency and grid stability while assisting in negotiating power purchase agreements (PPAs) with utilities or off-takers, including terms related to pricing, payment structure, dispatchability, and risk allocation."} img={"/assets/blank.png"}/>
            <FeatureCard name={"Conducting Due Diligence and Risk Assessments"} content={"We conduct technical, financial, and legal due diligence assessments for renewable energy projects to help stakeholders evaluate project risks, compliance with technical standards, contractual obligations, and potential returns on investment."} img={"/assets/blank.png"}/>

        </Grid>
      </Box>
    </>
  );
};
export default FeatureInformation;
