const Search = ({ search, setSearch }) => {
  return (
    <div className="form-group">
      <input
        type="search"
        className="form-control"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
