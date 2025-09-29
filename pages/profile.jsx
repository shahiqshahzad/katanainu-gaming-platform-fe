import Footer from "../components/Footer";
import Layout from "../components/common/Layout";
import { GameHighLights } from "../components/profile/GameHighLights";
import { Hero } from "../components/profile/Hero";
import { RecentlyPlayed } from "../components/profile/RecentlyPlayed";
import { TeamFinder } from "../components/profile/TeamFinder";
import style from "../styles/profile/profile.module.css";
export default function ProfilePage() {
  return (
    <>
      <Layout>
        <div className="">
          <Hero />
          <RecentlyPlayed />
          <div className={`grid ${style.profilepagegrid} gap-6`}>
            <TeamFinder />
            <GameHighLights />
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
