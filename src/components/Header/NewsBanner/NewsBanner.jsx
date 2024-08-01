import style from "./style.module.css";
import { formatTimeAgo } from "../../../Helpers/formatTimeAgo";
import { Image } from "../../img/Image";
export const NewsBanner = ({ item }) => {
  return (
    <div className={style.banner}>
      <Image image={item?.image} />

      <h3>{item.title}</h3>
      <p className={style.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};
