import Header from "@/components/header";
import ServiceContent from "@/components/serviceContent";
import DashboardLayout from "@/layouts/DasboardLayout";

const Services = () => {
    return (
        <>
        <DashboardLayout>
            <Header pageHeading={"Services"}/>
            <ServiceContent/>
        </DashboardLayout>
        </>
    )
}
export default Services;