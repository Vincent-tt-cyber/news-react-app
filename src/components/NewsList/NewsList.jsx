import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.scss";

const NewsList = ({ news }) => {
  return (
    <ul className={styles["news-list"]}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default NewsList;
