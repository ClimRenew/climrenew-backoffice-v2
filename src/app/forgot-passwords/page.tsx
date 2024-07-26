import EmailSent from "@/components/forgot-password"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Forgot Password",
  };
const ForgotPassword = () => {
    return (
        <>
        <EmailSent/>
        </>
    )
}
export default ForgotPassword