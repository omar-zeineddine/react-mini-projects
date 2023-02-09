import data from "./data/data";
import Article from "./Article";

function App() {
  return (
    <main>
      <nav className="nav-center">
        <h1>overreacted</h1>
        <button className="btn">toggle</button>
      </nav>
      <section className="articles">
        {data.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </main>
  );
}

export default App;
