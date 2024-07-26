import Header from "@/components/header";
import ServiceContent from "@/components/serviceContent";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const Services = () => {
  return (
    <>
      <DashboardLayout>
        <Header pageHeading={"Services"} />
        <ServiceContent />
     
      </DashboardLayout>
    </>
  );
};
export default Services;
