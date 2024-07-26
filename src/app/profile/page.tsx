import Header from "@/components/header";
import ProfileComponent from "@/components/profileComponent";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile",
  };
const Profile = () => {
  return (
    <>
      <DashboardLayout>
        <Header pageHeading={"Profile"}/>
        <ProfileComponent/>
        
      </DashboardLayout>
    </>
  );
};
export default Profile;
