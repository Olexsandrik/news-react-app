import React from "react";
import { getCategories } from "../../api/apiNews";
import { useFetching } from "../../Helpers/Hooks/useFetching";
import { Categories } from "../Categories/Categories";
import { Search } from "../Header/Search/Search";
import styles from './styles.module.css'
export const NewsFilters = ({ filters, changeFilters }) => {
  const { data: categoriesData } = useFetching(getCategories);
  return (
    <div className={styles.filters}>
      <Search
        keywords={filters.keywords}
        setKeyWords={(keywords) => changeFilters("keywords", keywords)}
      />

      {categoriesData && (
        <Categories
          categories={categoriesData.categories}
          setSelectedCategories={(category) =>
            changeFilters("category", category)
          }
          selectedCategories={filters.category}
        />
      )}
    </div>
  );
};
