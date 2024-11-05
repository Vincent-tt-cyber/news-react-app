import styles from "./NewsBanner.module.scss";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import PostImage from "../Image/PostImage";

const NewsBanner = ({ item }) => {
  return (
    <>
      <div className={styles["news-banner"]}>
        <PostImage image={item?.image} />
        <h3 className={styles["title"]}>{item.title}</h3>
        <p className={styles["date"]}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </>
  );
};

export default NewsBanner;
