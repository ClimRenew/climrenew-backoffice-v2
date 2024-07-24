import Header from "@/components/header";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <DashboardLayout>
        <Header pageHeading={"Profile"}/>
      </DashboardLayout>
    </>
  );
};
export default Profile;
