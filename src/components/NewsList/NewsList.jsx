import React from "react";
import styles from "./style.module.css";
import { NewsItem } from "../NewsItem/NewsItem";
// import { withSceleton } from '../../Helpers/hocs/withSceleton'

export const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
