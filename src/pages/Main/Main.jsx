import styles from "./styles.module.css";
import { LatestNews } from "../../components/LatestNews/LasetsNews";
import { NewsByFilter } from "../../components/newsByFilters/NewsByFilter";
export const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilter />
    </main>
  );
};
