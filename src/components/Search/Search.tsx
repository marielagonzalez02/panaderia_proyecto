import "./Search.css";

type Props = {
  search: string;
  setSearch: (val: string) => void;
};

export const Search = ({ search, setSearch }: Props) => {
  return (
    <input
      className="search"
      placeholder="Buscar producto..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};