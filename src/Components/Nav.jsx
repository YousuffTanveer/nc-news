import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Nav = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchTopics() {
    setIsLoading(true);
    axios
      .get("https://nc-news-api-izxs.onrender.com/api/topics")
      .then((response) => {
        setTopics(response.data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchTopics();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <nav className="Nav">
      {topics.map((topic) => {
        <Link
          to={`/topic/:topic_slug`}
          className="nav-link"
          key={topic.topic_slug}
        >
          {topic.topic_name}
        </Link>;
      })}
    </nav>
  );
};
export default Nav;
