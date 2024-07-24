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
import ProfileForm from "../profileForm";
import ChangeUserPassword from "../changePassword";
import AddAdministrator from "../addAdmin";

const ProfileComponent = () => {
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
              Profile
            </Tab>
            <Tab
              color={"#8C8C8C"}
              fontWeight={"400"}
              fontSize={"20px"}
              lineHeight={"24.2px"}
              className="inter"
              _selected={{ color: "#303030", fontWeight: "500" }}
            >
              Change Password
            </Tab>
            <Tab
              color={"#8C8C8C"}
              fontWeight={"400"}
              fontSize={"20px"}
              lineHeight={"24.2px"}
              className="inter"
              _selected={{ color: "#303030", fontWeight: "500" }}
            >
              Add an Administrator
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
              <ProfileForm />
            </TabPanel>
            <TabPanel>
                <ChangeUserPassword/>
            </TabPanel>
            <TabPanel>
              <AddAdministrator/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};
export default ProfileComponent;
