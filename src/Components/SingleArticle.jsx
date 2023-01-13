import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SingleArticle() {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // console.log(article);

  function fetchArticleById(articleId) {
    setIsLoading(true);
    return axios
      .get(`https://nc-news-api-izxs.onrender.com/api/articles/${articleId}`)
      .then(({ data }) => {
        // console.log(data);
        return data.article;
      });
  }

  useEffect(() => {
    fetchArticleById(articleId).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 classname="single-article-title">{article.title}</h1>
      <h2 classname="single-article-topic">{article.topic}</h2>
    </div>
  );
}

export default SingleArticle;
