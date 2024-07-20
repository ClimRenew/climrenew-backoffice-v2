import Header from "@/components/header";
import MoreSection from "@/components/moreSection";
import DashboardLayout from "@/layouts/DasboardLayout";

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