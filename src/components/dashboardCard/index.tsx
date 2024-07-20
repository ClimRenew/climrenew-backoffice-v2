import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  // chart?: React.ReactNode; // optional chart component
}

const AdminCard: React.FC<DashboardCardProps> = ({ title, value }) => {
  return (
    <Box
      border="1px solid #E8E8E8"
      borderRadius="7px"
      pb={"4"}
      pl={"6"}
      pr={"4"}
      pt={"4"}
      width={"260px"}
      h={"132px"}
    >
      <Text
        fontSize="18px"
        className="inter"
        fontWeight={"500"}
        lineHeight={"21.78px"}
        color="#303030"
      >
        {title}
      </Text>
      <Flex align="center" justify="space-between" mt={2}>
        <Text
          fontSize="32px"
          className="inter"
          fontWeight={"600"}
          lineHeight={"38.73px"}
          pt={"2"}
          color="#303030"
        >
          {value}
        </Text>
      </Flex>
      <Flex justifyContent={"end"}>
        <Image src="/assets/Vector.png" alt="img" w="" />
      </Flex>
    </Box>
  );
};

export default AdminCard;
