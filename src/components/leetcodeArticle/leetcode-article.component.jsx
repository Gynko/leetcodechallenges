import "./leetcode-article.styles.css";
import Code from "../Code/code.component";

export default function LeetCodeArticle({ article }) {
  return (
    <div>
      <h1 className="title">{article.title}</h1>
      <a href={article.url}>{article.url}</a>
      <p>{article.description}</p>
      <Code code={article.solution} language="javascript" />
      <h2>Train of thought to solve it</h2>
      <p>{article.walkthrough}</p>
    </div>
  );
}
