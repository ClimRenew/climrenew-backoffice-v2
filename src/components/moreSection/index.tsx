"use client";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AboutCimrenew from "../aboutClimrenew";
import AchievementSection from "../acheivementSection";
import TeamSection from "../teamSection";
import Image from "next/image";
import AddTeamModal from "../addTeamModal";

const MoreSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box pl="8" pr={"2"} pt={"12"} pb={"12"}>
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              color={"#8C8C8C"}
              fontWeight={"400"}
              fontSize={"20px"}
              lineHeight={"24.2px"}
              className="inter"
              _selected={{ color: "#303030", fontWeight: "500" }}
            >
              About Climrenew
            </Tab>
            <Tab
              color={"#8C8C8C"}
              fontWeight={"400"}
              fontSize={"20px"}
              lineHeight={"24.2px"}
              className="inter"
              _selected={{ color: "#303030", fontWeight: "500" }}
            >
              Achievements
            </Tab>{" "}
            <Tab
              color={"#8C8C8C"}
              fontWeight={"400"}
              fontSize={"20px"}
              lineHeight={"24.2px"}
              className="inter"
              _selected={{ color: "#303030", fontWeight: "500" }}
            >
              Teams
            </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="3px"
            bg="#22C55E"
            borderRadius="3px"
          />
          <TabPanels>
            <TabPanel>
              <AboutCimrenew headingName={"About Climrenew"} />
              <Divider />
              <AboutCimrenew headingName={"Mission"} />
              <Divider />
              <AboutCimrenew headingName={"Vision"} />

              <Divider />
              <AboutCimrenew headingName={"Story"} />
              <Divider />
              <AboutCimrenew headingName={"What we do"} />
            </TabPanel>
            <TabPanel>
              <AchievementSection headingNumber={"Header 1"} />
              <Divider />
              <AchievementSection headingNumber={"Header 2"} />
              <Divider />
              <AchievementSection headingNumber={"Header 3"} />
            </TabPanel>{" "}
            <TabPanel>
              <Flex justifyContent={"end"}>
                <Box
                  as="button"
                  bg="#22C55E"
                  color={"#FFFFFF"}
                  borderRadius={"30px"}
                  h={"48px"}
                  w={"224px"}
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
                    fontSize={"18px"}
                    lineHeight={"24px"}
                    fontWeight={"600"}
                    className="urbanist"
                  >
                    Add Team Member
                  </Text>
                </Box>
              </Flex>
              <TeamSection headingName={"Team Member 1"} />
              <Divider />
              <TeamSection headingName={"Team Member 2"} />
              <Divider />
              <TeamSection headingName={"Team Member 3"} />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <AddTeamModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>
    </>
  );
};
export default MoreSection;
