export default function ArticleCard({ article }) {
  return (
    <div className="Article-Card">
      <article>
        <h3 className="Article-Card-Header">{article.title}</h3>
        <p>author: {article.author}</p>
        <p>topic: {article.topic}</p>
        <p>comment_count: {article.comment_count}</p>
        <p>votes: {article.votes}</p>
        <p>created at: {article.created_at}</p>
      </article>
    </div>
  );
}
