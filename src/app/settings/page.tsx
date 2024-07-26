import Header from "@/components/header";
import SettingsContent from "@/components/settingsComponent";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Settings",
  };

const Settings = () => {
    return (
        <>
        <DashboardLayout>
            <Header pageHeading={"Settings"}/>
            <SettingsContent/>
        </DashboardLayout>
        </>
    )
}
export default Settings;