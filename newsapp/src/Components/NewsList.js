import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../features/NewsSlice";
import { FixedSizeList as List } from "react-window";

const NewsList = () => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading news...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const Row = ({ index, style }) => {
    const article = articles[index];
    return (
      <div style={style} className="news-item" key={index}>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </div>
    );
  };

  return (
    <List
      height={600}
      itemCount={articles.length}
      itemSize={120}
      width={"100%"}
    >
      {Row}
    </List>
  );
};

export default NewsList;
