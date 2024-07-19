import Header from "@/components/header";
import PostContent from "@/components/postContent";
import DashboardLayout from "@/layouts/DasboardLayout";

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
