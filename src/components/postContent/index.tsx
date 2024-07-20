"use client";
import { Box, Text, Flex, useDisclosure, Grid, Link } from "@chakra-ui/react";
import Image from "next/image";
import PostCard from "../postCard";
import AddPostModal from "../addPostModal";

const PostContent = () => {
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
          w={"182px"}
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
            Create Post
          </Text>
        </Box>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "repeat(2, 1fr)",
            xlg: "repeat(3, 1fr)",
          }}
          gap={{ lg: 4, xlg: 2 }}
          pt={"12"}
          width={"511px"}
        >
          <PostCard
            name={
              "The Nigerian Founder Connecting Businesses to Green-Tech Solutions"
            }
            content={
              "Meet CrowdSolve’s very own Innovator-in-Residence, Naphtali Obed Akudung. Naphtali’s innovation, Climrenew, connects business owners to green-tech solutions for renewable energy, plastic waste and sustainable agriculture to reduce carbon footprints.“For me, climate innovation means two things: (1) assessing the impact of climate change and suggesting better ways of managing it and (2) looking for available resources to solve climate change locally with the potential to scale globally” says Naphtali To put this view of climate innovation in action, Naphtali started Climrenew. This consultancy creates awareness on the impacts of climate change while connecting business owners to green-tech solutions, allowing them to grow as they build climate-positive businesses"
            }
            img={"/assets/ceo.png"}
          />
          <PostCard
            name={
              "EMPOWERING YOUTH VOICES IN CLIMATE ACTION: A JOURNEY WITH NAPHTALI AKUDUNG"
            }
            content={
              "Meet CrowdSolve’s very own Innovator-in-Residence, Naphtali Obed Akudung. Naphtali’s innovation, Climrenew, connects business owners to green-tech solutions for renewable energy, plastic waste and sustainable agriculture to reduce carbon footprints.“For me, climate innovation means two things: (1) assessing the impact of climate change and suggesting better ways of managing it and (2) looking for available resources to solve climate change locally with the potential to scale globally” says Naphtali To put this view of climate innovation in action, Naphtali started Climrenew. This consultancy creates awareness on the impacts of climate change while connecting business owners to green-tech solutions, allowing them to grow as they build climate-positive businesses"
            }
            img={"/assets/naph.png"}
          />
          <PostCard
            name={
              'COP 28 in Dubai: Exploring Prospects for "Nature-Based Solutions" in the Global South'
            }
            content={
              "Meet CrowdSolve’s very own Innovator-in-Residence, Naphtali Obed Akudung. Naphtali’s innovation, Climrenew, connects business owners to green-tech solutions for renewable energy, plastic waste and sustainable agriculture to reduce carbon footprints.“For me, climate innovation means two things: (1) assessing the impact of climate change and suggesting better ways of managing it and (2) looking for available resources to solve climate change locally with the potential to scale globally” says Naphtali To put this view of climate innovation in action, Naphtali started Climrenew. This consultancy creates awareness on the impacts of climate change while connecting business owners to green-tech solutions, allowing them to grow as they build climate-positive businesses"
            }
            img={"/assets/guyana.png"}
          />
        </Grid>
        <AddPostModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>
    </>
  );
};
export default PostContent;
