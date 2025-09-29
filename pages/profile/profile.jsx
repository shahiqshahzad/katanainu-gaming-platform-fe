import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Layout from "../../components/common/Layout";
import { useEffect } from "react";
import ProfileDetails from "../../components/profile/ProfileDetails";
import GalleryProfileTabsCommon from "../../components/GalleryProfileTabsCommon";
import CommonProfile from "../../components/common/CommonProfile";
import FanPage from "../../components/fanPage/FanPage";
import { useRouter } from "next/router";
import { getSingleUser } from "../../utils/api/userModule";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: user } = getSingleUser(id);
  useEffect(() => {
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      {user?.data?.isPage ? (
        <FanPage />
      ) : (
        <>
          <Layout>
            <div className=""></div>
            <Hero />
            <CommonProfile />
            <GalleryProfileTabsCommon />

            <ProfileDetails />
          </Layout>
          <Footer />
        </>
      )}
    </>
  );
}
