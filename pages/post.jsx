import { useRouter } from "next/router";
import Layout from "../components/common/Layout";
import ViewPost from "../components/profile/ViewPost";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout nosidebar noupbar>
      <ViewPost id={id} />
    </Layout>
  );
}
