import Header from "@/components/header";
import TicketContent from "@/components/ticketContent";
import DashboardLayout from "@/layouts/DasboardLayout";

const Tickets = () => {
    return (
        <>
        <DashboardLayout>
            <Header pageHeading={"Ticket"}/>
            <TicketContent/>
        </DashboardLayout>
        </>
    )
}
export default Tickets;