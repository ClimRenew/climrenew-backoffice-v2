import RecoverPassword from "@/components/recover-password";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recover Password",
  };
const RecoverUserPassword = () => {
    return (
        <>
        <RecoverPassword/>
        </>
    )
}
export default RecoverUserPassword;