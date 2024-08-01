import styles from "./styles.module.css";
import { NewsBanner } from "../../components/Header/NewsBanner/NewsBanner";
import { useState } from "react";
import { getNews, getCategories } from "../../api/apiNews";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Header/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";
import { Categories } from "../../components/Categories/Categories";
import { Search } from "../../components/Header/Search/Search";
import { useDebounse } from "../../Helpers/Hooks/useDebounce";
import { PAGESIZE, TOTAL_PAGES } from "../../components/constant/constant";
import { useFetching } from "../../Helpers/Hooks/useFetching";
import { useFilters } from "../../Helpers/Hooks/useFilters";

export const Main = () => {
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

  const { data: categoriesData } = useFetching(getCategories);

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
    <main className={styles.main}>
      <Search
        keywords={filters.keywords}
        changeFilters={(keywords) => changeFilters("keywords", keywords)}
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

      {newsData?.news?.length > 0 && !newsLoading ? (
        <NewsBanner item={newsData.news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        setCurrentPage={(page) => changeFilters("page_number", page)}
        currentPage={filters.page_number}
      />

      {!newsLoading ? (
        <NewsList news={newsData?.news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}
    </main>
  );
};
