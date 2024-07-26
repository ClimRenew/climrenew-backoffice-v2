import SubscriberCard from "@/components/chart";
import AdminCard from "@/components/dashboardCard";
import Header from "@/components/header";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  const data = [900, 1500, 1200, 1800, 2000, 1700, 1800];
  const labels = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <>
      <DashboardLayout>
        <Header pageHeading={"Dashboard"} />
        <Box pl="6" pt={"12"} pb={'12'} pr='2' overflow={'hidden'}>
          <Grid gap={"4"} templateColumns={"repeat(4, 1fr)"} 
      width={"260px"}
      >
            <AdminCard title={"Admins"} value={"2"} />
            <AdminCard title={"Pending Tickets"} value={"4"} />
            <AdminCard title={"Total Tickets"} value={"3"} />
            <AdminCard title={"Pending Invites"} value={"3"} />
            <AdminCard title={"Subscribers"} value={"4"} />
            <AdminCard title={"Posts"} value={"4"} />
            <AdminCard title={"Campaigns"} value={"4"} />
            <AdminCard title={"Services"} value={"3"} />
          </Grid>
          <Grid gap={"4"} templateColumns={"repeat(3, 1fr)"} mt={'8'} 
      width="350px"
      >
          <SubscriberCard title="Subscribers" data={data} labels={labels} />
          <SubscriberCard title="Tickets" data={data} labels={labels} />
          <SubscriberCard title="Pending Invites" data={data} labels={labels} />

          </Grid>
        </Box>
      </DashboardLayout>
    </>
  );
};
export default Dashboard;
