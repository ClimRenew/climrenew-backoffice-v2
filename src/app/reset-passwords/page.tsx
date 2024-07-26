import ResetPassword from "@/components/reset-password";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resets Password",
  };
const ResetUserPassword = () => {
    return (
        <>
        <ResetPassword/>
        </>
    )
}
export default ResetUserPassword;