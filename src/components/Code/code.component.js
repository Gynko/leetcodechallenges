import { useEffect } from "react";
import Prism from "prismjs";
import "./prism.css";

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre className="line-numbers">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}
