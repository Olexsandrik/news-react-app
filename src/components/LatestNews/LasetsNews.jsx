import React from "react";
import styles from "./styles.module.css";
import { BannerList } from "../BannersLists/BannerList";
import { useFetching } from "../../Helpers/Hooks/useFetching";
import { getLatestNews } from "../../api/apiNews";
import { Skeleton } from "../Header/Skeleton/Skeleton";

export const LatestNews = () => {
  const { data: latestNewsData, isLoading: latestIsLoading } =
    useFetching(getLatestNews);

  return (
    <section className={styles.section}>
      {latestNewsData?.news?.length > 0 && !latestIsLoading ? (
        <BannerList
          banners={latestNewsData?.news || []}
          isLoading={latestIsLoading}
        />
      ) : (
        <Skeleton type={"banner"} count={10} direction={"row"} />
      )}
    </section>
  );
};
