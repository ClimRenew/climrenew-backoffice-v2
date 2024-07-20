"use client";
import { Box, Text, Flex, useDisclosure, Grid, Link } from "@chakra-ui/react";
import Image from "next/image";
import FAQCard from "../faqCard";
import AddFaqModal from "../addFaqModal";

const FAQsContent = () => {
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
          w={"156px"}
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
            New Faq
          </Text>
        </Box>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "repeat(2, 1fr)",
            xlg: "repeat(3, 1fr)",
          }}
          gap={{lg:6,xl:2}}
          pt={"12"}
          width={"511px"}
        >
          <FAQCard
            name={"What does Climrenew do ?"}
            content={
              "Climrenew is a consultancy firm that helps companies, businesses, NGOs, and corporations meet their ESG (Environmental, Social, and Governance) goals. We connect them with clean tech solution providers to make positive changes for the planet."
            }
          />
          <FAQCard
            name={"What does ESG stand for ?"}
            content={
              "ESG stands for Environmental, Social, and Governance. It refers to the three central factors in measuring the sustainability and societal impact of an investment or business."
            }
          />
          <FAQCard
            name={"What are clean tech solutions ?"}
            content={
              "Clean tech solutions are technologies and innovations that aim to reduce environmental impact and promote sustainability. These can include renewable energy sources, energy-efficient technologies, waste management solutions, and more."
            }
          />
          <FAQCard
            name={"Why is it important for businesses to focus on ESG goals ?"}
            content={
              "Focusing on ESG goals is essential for businesses because it helps them become more sustainable, socially responsible, and resilient in the face of environmental and social challenges. It can also enhance their reputation, attract investors, and create long-term value."
            }
          />
          <FAQCard
            name={"What types of companies does Climrenew work with ?"}
            content={
              "Climrenew has a network of clean tech solution providers that offer innovative products and services. We match businesses with the most suitable providers based on their needs and goals, facilitating partnerships that drive positive change."
            }
          />
          <FAQCard
            name={
              "How does Climrenew connect businesses with clean tech solution providers ?"
            }
            content={
              "Climrenew works with a diverse range of companies, including small businesses, large corporations, NGOs, and startups. We believe that every organization has the potential to make a difference and contribute to a more sustainable future."
            }
          />
          <FAQCard
            name={"How can I get involved with Climrenew ?"}
            content={
              "If you're passionate about sustainability and making a positive impact, there are several ways to get involved with Climrenew. You can explore internship or job opportunities, participate in our events and workshops, or simply reach out to us to learn more about what we do."
            }
          />
        </Grid>
        <AddFaqModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>
    </>
  );
};
export default FAQsContent;
