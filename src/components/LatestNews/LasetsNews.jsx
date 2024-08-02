import React from "react";
import styles from "./styles.module.css";
import { BannerList } from "../BannersLists/BannerList";

export const LatestNews = ({banners,isLoading}) => {
  return (
    <section className={styles.section}>
      <BannerList banners={banners} isLoading={isLoading}/>
    </section>
  );
};
