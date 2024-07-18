import FeatureContent from "@/components/featureContents";
import Header from "@/components/header";
import DashboardLayout from "@/layouts/DasboardLayout";

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
