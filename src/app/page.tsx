import SignIn from "@/components/signIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const LoginPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default LoginPage;