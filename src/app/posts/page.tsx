import Header from "@/components/header";
import PostContent from "@/components/postContent";
import DashboardLayout from "@/layouts/DasboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs",
  };

const Posts = () => {
  return (
    <>
      <DashboardLayout>
        <Header pageHeading={"Post"} />
        <PostContent />
      </DashboardLayout>
    </>
  );
};
export default Posts;
