import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import Header from "./Header";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchArticles() {
    setIsLoading(true);
    axios
      .get("https://nc-news-api-izxs.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{Header}</h1>
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </div>
  );
}

export default Articles;
