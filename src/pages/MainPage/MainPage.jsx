import React, { useEffect, useState } from "react";
import styles from "./MainPage.module.scss";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";

const MainPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <main className={styles["main"]}>
        {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
        <NewsList news={news} />
      </main>
    </>
  );
};

export default MainPage;
