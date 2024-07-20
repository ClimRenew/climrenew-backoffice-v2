import Header from "@/components/header";
import SettingsContent from "@/components/settingsComponent";
import DashboardLayout from "@/layouts/DasboardLayout";

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