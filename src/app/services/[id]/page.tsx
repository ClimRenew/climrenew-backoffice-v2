import FeatureContent from "@/components/featureContents";
import FeatureInformation from "@/components/featureInformation";
import Header from "@/components/header";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Box,Text } from "@chakra-ui/react";

const ServicesFeatures = () => {
    return (
        <>
        <DashboardLayout>
            <Header pageHeading={"Renewable Energy Consulting"}/>
          <FeatureInformation/>
        </DashboardLayout>
        </>
    )
}
export default ServicesFeatures;