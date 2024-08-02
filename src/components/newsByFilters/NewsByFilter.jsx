import React from "react";
import { getCategories } from "../../api/apiNews";
import { useFetching } from "../../Helpers/Hooks/useFetching";
import { Categories } from "../Categories/Categories";
import { Search } from "../Header/Search/Search";
import { Skeleton } from "../Header/Skeleton/Skeleton";
import { NewsList } from "../NewsList/NewsList";
import { Pagination } from "../Pagination/Pagination";
import { TOTAL_PAGES } from "../constant/constant";
import styles from "./styles.module.css";
import { NewsFilters } from "../NewsFilters/NewsFilters";

export const NewsByFilter = ({ filters, changeFilters, news, newsLoading }) => {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilters("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilters("page_number", filters.page_number - 1);
    }
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        setCurrentPage={(page) => changeFilters("page_number", page)}
        currentPage={filters.page_number}
      />

      {!newsLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}
    </section>
  );
};
