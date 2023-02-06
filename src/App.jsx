import { useState } from "react";
import reactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        {/* name, cols, rows --> set in css */}
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">{markdown}</article>
      </section>
    </main>
  );
}

export default App;
