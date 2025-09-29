import React from "react";
import styles from "../../styles/tournament-overview/index.module.css";
import stylestwo from "../../styles/landing/index.module.css";
import { BlogCard } from "./BlogCard";
import { Scene } from "react-scrollmagic";
export const Blog = () => {
  return (
    <div className={`${styles.teamoverview} ${stylestwo.teamoverview}`}>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div className={`flex items-center justify-between scrollOut`}>
          <h2 className={`font-bebas-neue transform translate-y-10`}>Blog</h2>
          <h1 className={`font-bebas-neue transform -translate-x-60`}>
            Our Best
            <br />
            <span>Blog</span>
          </h1>
        </div>
      </Scene>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div
          className={`grid grid-cols-11 ${stylestwo.blogwrapper} gap-6 scrollOut`}
        >
          <BlogCard
            heading="Call of duty Modern warfare 3"
            para="Developed by various studios, including Infinity Ward, Treyarch, and Sledgehammer Games,"
            img="/images/landing/blog1.png"
          />
          <BlogCard
            heading="Call of duty Modern warfare 3"
            para="Developed by various studios, including Infinity Ward, Treyarch, and Sledgehammer Games, Call of Duty"
            img="/images/landing/blog2.png"
          />
          <BlogCard
            heading="Call of duty Modern warfare 3"
            para="Developed by various studios, including Infinity Ward, Treyarch, and Sledgehammer Games, Call of Duty"
            img="/images/landing/blog3.png"
          />
          <BlogCard
            heading="Call of duty Modern warfare 3"
            para="Developed by various studios, including Infinity Ward, Treyarch,  Games"
            img="/images/landing/blog4.png"
          />
          <BlogCard
            heading="Call of duty Modern warfare 3"
            para="Developed by various studios, including Infinity Ward, Treyarch,  Games"
            img="/images/landing/blog5.png"
          />
        </div>
      </Scene>
    </div>
  );
};
