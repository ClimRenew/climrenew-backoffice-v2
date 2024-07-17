import AdminCard from "@/components/dashboardCard";
import Header from "@/components/header";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Box, Flex,Grid } from "@chakra-ui/react";

const Dashboard = () => {
    return (
        <>
        <DashboardLayout>
            <Header pageHeading={"Dashboard"}/>
            <Box px='8' pt={'12'}>
                <Grid gap={'4'} templateColumns={'repeat(4, 1fr)'}>
                    <AdminCard title={"Admins"} value={"2"}/>
                    <AdminCard title={"Pending Tickets"} value={"4"}/>
                    <AdminCard title={"Total Tickets"} value={"3"}/>
                    <AdminCard title={"Pending Invites"} value={"3"}/>
                     <AdminCard title={"Subscribers"} value={"4"}/>
                    <AdminCard title={"Posts"} value={"4"}/>
                    <AdminCard title={"Campaigns"} value={"4"}/>
                    <AdminCard title={"Services"} value={"3"}/>
                </Grid>
            </Box>
        </DashboardLayout>
        </>
    )
}
export default Dashboard;