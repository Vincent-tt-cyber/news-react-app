import styles from "./NewsItem.module.scss";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

const NewsItem = ({ item }) => {
  return (
    <li className={styles["news-item"]}>
      <div
        className={styles["wrapper"]}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        {/* <img className={styles["image"]} src={item.image} alt={item.title} /> */}
      </div>
      <div className={styles["info"]}>
        <h3 className={styles["title"]}>{item.title}</h3>
        <p className={styles["date"]}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
