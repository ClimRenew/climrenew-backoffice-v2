import Header from "@/components/header"
import NewsletterContent from "@/components/newsletterContent";
import DashboardLayout from "@/layouts/DasboardLayout"

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