import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Divider,
} from "@chakra-ui/react";
import AboutCimrenew from "../aboutClimrenew";

const MoreSection = () => {
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
            <TabPanel></TabPanel> <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};
export default MoreSection;
