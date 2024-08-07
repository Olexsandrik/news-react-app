import React from "react";
import styles from "./styles.module.css"; 
import { NewsBanner } from "../Header/NewsBanner/NewsBanner"; 

export const BannerList = ({ banners }) => {
  return (
    <ul className={styles.banners}> 
      {banners.map((banner) => (
        <NewsBanner key={banner.id} item={banner} /> 
      ))}
    </ul>
  );
};
