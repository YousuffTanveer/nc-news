import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topic_slug, setTopic_slug] = useState("coding");

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
  }, [topic_slug]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      <button onClick={() => setTopic_slug("coding")}>coding</button>
      <button onClick={() => setTopic_slug("cooking")}>cooking</button>
      <button onClick={() => setTopic_slug("football")}>football</button>
      <div>
        {articles.map((article) => {
          return (
            <Link to={`/article/${article.article_id}`}>
              <ArticleCard article={article} />
            </Link>
          );
        })}
      </div>
    </ul>
  );
}

export default Articles;
