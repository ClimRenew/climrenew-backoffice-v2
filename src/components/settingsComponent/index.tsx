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
import HomeInformation from "../homeInformation";
import ContactInformation from "../contactInformation";

const SettingsContent = () => {
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
              Home Information
            </Tab>
            <Tab
              color={"#8C8C8C"}
              fontWeight={"400"}
              fontSize={"20px"}
              lineHeight={"24.2px"}
              className="inter"
              _selected={{ color: "#303030", fontWeight: "500" }}
            >
              Contact Information
            </Tab>
            <Tab
              color={"#8C8C8C"}
              fontWeight={"400"}
              fontSize={"20px"}
              lineHeight={"24.2px"}
              className="inter"
              _selected={{ color: "#303030", fontWeight: "500" }}
            >
              Social Links
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
             <HomeInformation headingNumber={"Heading 1"}/>
          <Divider />

             <HomeInformation headingNumber={"Heading 2"}/>
          <Divider />

             <HomeInformation headingNumber={"Heading 3"}/>
          <Divider />

             <HomeInformation headingNumber={"Heading 4"}/>

            </TabPanel>

            <TabPanel>
              <ContactInformation />
            </TabPanel>

            <TabPanel>{/* Social Links Form Fields */}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};
export default SettingsContent;
