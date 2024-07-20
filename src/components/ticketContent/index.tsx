"use client";
import { Box, Text, Flex, useDisclosure, Grid, Link } from "@chakra-ui/react";
import Image from "next/image";
import TicketCard from "../ticketCard";

const TicketContent = () => {
  return (
    <>
      <Box pl="8" pt={"12"} pb={"12"}>
        <Grid  templateColumns={{
            base: "1fr",
            lg: "repeat(2, 1fr)",
            xlg: "repeat(3, 1fr)",
          }}
          gap={{ lg: 4, xlg: 2 }} pt={"12"} 
        width={"511px"}
        >
            <TicketCard name={"KUMCHI JOY"} content={"Want to learn about the role of HR"} img={"/assets/blank2.png"} roleHeading={"HR ROLE"} durations={'3 weeks ago'} status={"opened"}/>
            <TicketCard name={"KUMCHI JOY"} content={"Want to learn about the role of HR"} img={"assets/blank2.png"} roleHeading={"THE ROLE OF HR"} durations={"1 week ago"} status={"responded"}/>
            <TicketCard name={"KUMCHI JOY"} content={"Want to learn about the role of HR"} img={"/assets/blank2.png"} roleHeading={"HR ROLE"} durations={"3 weeks ago"} status={"closed"}/>

        </Grid>
      </Box>
    </>
  );
};
export default TicketContent;
