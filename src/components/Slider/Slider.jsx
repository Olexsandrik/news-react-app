import React from "react";
import styles from "./styles.module.css";
import { useRef } from "react";

export const Slider = ({ children, step }) => {
  const count = useRef(null);

  const scrollLeft = () => {
    count.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    count.current.scrollLeft += step;
  };
  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}>{"<"}</button>
      {React.cloneElement(children,{ref: count})}
      <button onClick={scrollRight} className={styles.arrow}>{">"}</button>
    </div>
  );
};
