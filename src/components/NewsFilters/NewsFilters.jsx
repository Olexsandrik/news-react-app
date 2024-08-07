import React from "react";
import { getCategories } from "../../api/apiNews";
import { useFetching } from "../../Helpers/Hooks/useFetching";
import { Categories } from "../Categories/Categories";
import { Search } from "../Header/Search/Search";
import styles from "./styles.module.css";
import { Slider } from "../Slider/Slider";
export const NewsFilters = ({ filters, changeFilters }) => {
  const { data: categoriesData } = useFetching(getCategories);


  return (
    <div className={styles.filters}>
      <Search
        keywords={filters.keywords}
        setKeyWords={(keywords) => changeFilters("keywords", keywords)}
      />

      {categoriesData && (
        <Slider step={200}>
          <Categories
            categories={categoriesData.categories}
            setSelectedCategories={(category) =>
              changeFilters("category", category)
            }
            selectedCategories={filters.category}
          />
        </Slider>
      )}
    </div>
  );
};
