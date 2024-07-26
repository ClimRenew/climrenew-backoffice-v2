import Header from "@/components/header";
import TicketContent from "@/components/ticketContent";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tickets",
  };

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