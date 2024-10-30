import CampaignContent from "@/components/campaignContent";
import Header from "@/components/header";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaigns",
};

const Campaigns = () => {
  return (
    <>
      <DashboardLayout>
        <Header pageHeading={"Campaigns"} />
        <CampaignContent />
      </DashboardLayout>
    </>
  );
};
export default Campaigns;
