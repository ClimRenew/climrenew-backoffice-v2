import Header from "@/components/header";
import MoreSection from "@/components/moreSection";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "More Sections",
  };
const More = () => {
    return (
        <>
        <DashboardLayout>
            <Header pageHeading={"More"}/>
            <MoreSection/>
        </DashboardLayout>
        </>
    )
}
export default More;