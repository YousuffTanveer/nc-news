export default function ArticleCard({ article }) {
  return (
    <article className="Article-Card" key={article.article_id}>
      <h3 className="Article-Card-Header">{article.title}</h3>
      <p>author: {article.author}</p>
      <p>topic: {article.topic}</p>
      <p>comment_count: {article.comment_count}</p>
      <p>votes: {article.votes}</p>
      <p>created at: {article.created_at}</p>
    </article>
  );
}
