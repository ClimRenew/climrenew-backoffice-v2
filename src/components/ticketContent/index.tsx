"use client";
import { Box, Text, Flex, useDisclosure, Grid, Link } from "@chakra-ui/react";
import Image from "next/image";
import TicketCard from "../ticketCard";

const TicketContent = () => {
  return (
    <>
      <Box pl="8" pt={"12"} pb={"12"}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} pt={"12"}>
            <TicketCard name={"KUMCHI JOY"} content={"Want to learn about the role of HR"} img={"/assets/blank2.png"} roleHeading={"HR ROLE"} durations={'3 weeks ago'} status={"opened"}/>
            <TicketCard name={"KUMCHI JOY"} content={"Want to learn about the role of HR"} img={"assets/blank2.png"} roleHeading={"THE ROLE OF HR"} durations={"1 week ago"} status={"responded"}/>
            <TicketCard name={"KUMCHI JOY"} content={"Want to learn about the role of HR"} img={"/assets/blank2.png"} roleHeading={"HR ROLE"} durations={"3 weeks ago"} status={"closed"}/>

        </Grid>
      </Box>
    </>
  );
};
export default TicketContent;