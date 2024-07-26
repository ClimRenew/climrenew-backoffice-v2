import FeatureContent from "@/components/featureContents";
import Header from "@/components/header";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
};

const Partners = () => {
  return (
    <>
      <DashboardLayout>
        <Header pageHeading={"Partners"} />
        <FeatureContent />
      </DashboardLayout>
    </>
  );
};
export default Partners;
