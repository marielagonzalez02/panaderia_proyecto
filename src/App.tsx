import { useState } from "react";
import { useCharacters } from "./hooks/useCharacters";
import { Card } from "./components/Card/Card";
import { Search } from "./components/Search/Search";
import "./App.css";

const empty: Omit<Character, "id"> = {
  nombre: "", descripcion: "", precio: 0, categoria: "Pan", image: ""
};

function App() {
  const { filtered, search, setSearch, categoria, setCategoria, total, promedio, agregar, eliminar, editar } = useCharacters();
  const [form, setForm] = useState<Omit<Character, "id">>(empty);
  const [editId, setEditId] = useState<number | null>(null);

  const categorias = ["Todas", "Pan", "Pastel", "Galletas", "Bebida"];

  const handleSubmit = () => {
    if (!form.nombre || form.precio <= 0) return alert("Nombre y precio son requeridos");
    if (editId !== null) {
      editar({ ...form, id: editId });
      setEditId(null);
    } else {
      agregar(form);
    }
    setForm(empty);
  };

  const handleEditar = (p: Character) => {
    setForm({ nombre: p.nombre, descripcion: p.descripcion, precio: p.precio, categoria: p.categoria, image: p.image });
    setEditId(p.id);
  };

  return (
    <>
      <div className="header">
        <div>
          <h1>🥐 Panadería </h1>
        </div>
      </div>

      <div className="app">
        <div className="stats">
          <div className="stat">📦 Total de productos: <strong>{total}</strong></div>
          <div className="stat">💰 Precio promedio: <strong>${promedio} MXN</strong></div>
        </div>

        <div className="form-section">
          <h2>{editId !== null ? "✏️ Editar Producto" : "➕ Agregar Producto"}</h2>
          <div className="form">
            <input placeholder="Nombre *" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
            <input placeholder="Precio (MXN) *" type="number" value={form.precio} onChange={e => setForm({ ...form, precio: Number(e.target.value) })} />
            <input placeholder="Descripción" value={form.descripcion} onChange={e => setForm({ ...form, descripcion: e.target.value })} />
            <input placeholder="URL de imagen" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
            <select value={form.categoria} onChange={e => setForm({ ...form, categoria: e.target.value as Character["categoria"] })}>
              <option>Pan</option>
              <option>Pastel</option>
              <option>Galletas</option>
              <option>Bebida</option>
            </select>
            <button onClick={handleSubmit}>{editId !== null ? "💾 Guardar" : "+ Agregar Producto"}</button>
          </div>
        </div>

        <div className="search-section">
          <input placeholder="🔍 Buscar producto..." value={search} onChange={e => setSearch(e.target.value)} />
          <div className="filtros">
            {categorias.map(c => (
              <button key={c} className={`filtro-btn ${categoria === c ? "active" : ""}`} onClick={() => setCategoria(c)}>{c}</button>
            ))}
          </div>
        </div>

        <p className="productos-title">Productos ({filtered.length})</p>

        <div className="grid">
          {filtered.map(p => (
            <Card key={p.id} {...p} onEliminar={eliminar} onEditar={handleEditar} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;