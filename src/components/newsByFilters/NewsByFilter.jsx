import React from "react";
import { useFetching } from "../../Helpers/Hooks/useFetching";
import { Skeleton } from "../Header/Skeleton/Skeleton";
import { NewsList } from "../NewsList/NewsList";
import { PAGESIZE, TOTAL_PAGES } from "../constant/constant";
import styles from "./styles.module.css";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import { useDebounse } from "../../Helpers/Hooks/useDebounse";
import { useFilters } from "../../Helpers/Hooks/useFilters";
import { getNews } from "../../api/apiNews";
import { PagintionWrapper } from "../paginationWrapper/PagintionWrapper";

export const NewsByFilter = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGESIZE,
    category: null,
    keywords: "",
  });

  const debounse = useDebounse(filters.keywords, 1500);

  const { data: newsData, isLoading: newsLoading } = useFetching(getNews, {
    ...filters,
    keywords: debounse,
  });

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

      <PagintionWrapper
        top
        button
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        setCurrentPage={(page) => changeFilters("page_number", page)}
        currentPage={filters.page_number}
      >
        {!newsLoading ? (
          <NewsList news={newsData?.news} />
        ) : (
          <Skeleton type={"item"} count={10} />
        )}
      </PagintionWrapper>
    </section>
  );
};
