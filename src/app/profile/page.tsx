import Header from "@/components/header";
import ProfileComponent from "@/components/profileComponent";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

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
