import ActivityContent from "@/components/activityContent";
import Header from "@/components/header";
import DashboardLayout from "@/layouts/DasboardLayout";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Activities",
  };

const Activity = () => {
    return (
        <>
        <DashboardLayout>
            <Header pageHeading={"Activities"}/>
          <ActivityContent/>
        </DashboardLayout>
        </>
    )
}
export default Activity;