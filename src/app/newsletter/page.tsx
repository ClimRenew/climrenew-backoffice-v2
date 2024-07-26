import Header from "@/components/header"
import NewsletterContent from "@/components/newsletterContent";
import DashboardLayout from "@/layouts/DasboardLayout"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Newsletter",
  };
  
const NewsLetterService = () => {
    return (
        <>
        <DashboardLayout>
            <Header pageHeading={"Newsletter"}/>
            <NewsletterContent/>
        </DashboardLayout>
        </>
    )
}
export default NewsLetterService;