import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import { Skeleton } from "../../components/Header/Skeleton/Skeleton";
import { useDebounse } from "../../Helpers/Hooks/useDebounce";
import { PAGESIZE } from "../../components/constant/constant";
import { useFetching } from "../../Helpers/Hooks/useFetching";
import { useFilters } from "../../Helpers/Hooks/useFilters";
import { LatestNews } from "../../components/LatestNews/LasetsNews";
import { NewsByFilter } from "../../components/newsByFilters/NewsByFilter";
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

  return (
    <main className={styles.main}>
      {newsData?.news?.length > 0 && !newsLoading ? (
        <LatestNews isLoading={newsLoading} banners={newsData.news} />
      ) : (
        <Skeleton type={"banner"} count={10} direction={'row'} />
      )}

      <NewsByFilter
        filters={filters}
        newsLoading={newsLoading}
        news={newsData?.news}
        changeFilters={changeFilters}
      />
    </main>
  );
};
