import React from "react";
import styles from "./styles.module.css";

export const Categories = ({
  categories,
  setSelectedCategories,
  selectedCategories,
}) => {
  return (
    <div className={styles.categories}>
      <button
        onClick={() => setSelectedCategories(null)}
        className={!selectedCategories ? styles.active : styles.item}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategories(category)}
          className={
            selectedCategories === category ? styles.active : styles.item
          }
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
