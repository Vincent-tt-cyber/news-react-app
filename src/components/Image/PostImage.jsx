import styles from "./Image.module.scss";

const PostImage = ({ image }) => {
  return (
    <>
      <div className={styles["wrapper"]}>
        {image ? (
          <img className={styles["image"]} src={image} alt="news" />
        ) : null}
      </div>
    </>
  );
};

export default PostImage;
