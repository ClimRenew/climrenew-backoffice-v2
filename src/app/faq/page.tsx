import FAQsContent from "@/components/faqContent";
import Header from "@/components/header";
import DashboardLayout from "@/layouts/DasboardLayout";

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