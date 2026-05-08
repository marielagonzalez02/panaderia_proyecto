import { useCharacters } from "./hooks/useCharacters";
import { Card } from "./components/Card/Card";
import { Search } from "./components/Search/Search";
import "./App.css";

function App() {
  const { filtered, search, setSearch } = useCharacters();

  return (
    <div className="app">
      <h1>🥖 Pan 8 n  </h1>
      <Search search={search} setSearch={setSearch} />
      <div className="grid">
        {filtered && filtered.length > 0 ? (
          filtered.map((p) => (
            <Card key={p.id} {...p} />
          ))
        ) : (
          <p>No se encontraron panes...</p>
        )}
      </div>
    </div>
  );
}

export default App;