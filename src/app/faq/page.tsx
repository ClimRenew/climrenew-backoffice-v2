import FAQsContent from "@/components/faqContent";
import Header from "@/components/header";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs",
  };

const FAQs = () => {
    return (
        <>
        <DashboardLayout>
            <Header pageHeading={"Faq"}/>
          <FAQsContent/>
        </DashboardLayout>
        </>
    )
}
export default FAQs;