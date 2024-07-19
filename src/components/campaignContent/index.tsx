"use client";
import { Box, Text, Flex, useDisclosure, Grid, Link } from "@chakra-ui/react";
import Image from "next/image";
import CampaignCard from "../campaignCard";
import AddCampaignModal from "../addCampaignModal";

const CampaignContent = () => {
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
          w={"218px"}
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
            whiteSpace={"nowrap"}
          >
           New Campaign
          </Text>
          </Box>
          <Grid templateColumns={"repeat(3,1fr)"} gap={"8"} pt={"12"}>
          <CampaignCard
            name={"Save the Lagoon "}
            content={
              "Climrenew collaborated with SDA (University of Lagos) Nigeria and U-recycle Initiative to train more than 300 participants on strategies to address plastic waste pollution. This initiative was made possible through funding from the Captain Planet Foundation, a US-based NGO committed to supporting change-makers in their environmental endeavors. We were privileged to have significant participation from school management, who encouraged participants to take their role in effecting change seriously. Following the training, participants received certification and were welcomed into the Planeteer Network, where they can continually receive firsthand support for their diverse initiatives."
            }
            img={"/assets/lagoon.png"}
          />
          <CampaignCard
            name={"Plastic Research"}
            content={
              "Climrenew collaborated with Nigeria University of Technology and Management to conduct a behavioral change study on plastic waste collection. Through this initiative, over 7000 PET bottles were collected. The primary objectives included identifying barriers to plastic collection and exploring strategies for improvement in this area."
            }
            img={"/assets/plastic-research.png"}
          />
          <CampaignCard
            name={"Wind Summit Jos "}
            content={
              "Climrenew collaborated with nHub and Impact Training Room (ITR) to provide education to over 100 individuals on strategies to combat plastic pollution in Jos Plateau State, Nigeria. The training sessions emphasized understanding the cultural perspectives of local communities in addressing pollutants that directly affect their water sources. This initiative received funding from the Captain Planet Foundation through its Planeteer Alliance Network. Upon completion, all participants received certificates and were invited to join the Planeteer Network community."
            }
            img={"/assets/wind-summit.png"}
          />
          <CampaignCard
            name={"Clean Games "}
            content={
              "Climrenew participated in the Clean Games event in Russia during SPIEF, alongside other companies invited through the Friends for Leadership (FFL) network. The event highlighted the effectiveness of gamifying activities related to environmental sustainability, particularly in stimulating participation, especially when clear incentives are provided."
            }
            img={"/assets/clean-games.png"}
          />
         
        </Grid>
        <AddCampaignModal isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
      </Box>
    </>
  );
};
export default CampaignContent;
