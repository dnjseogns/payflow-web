function SearchInput({
  value = '',
  onChange,
  placeholder = '',
  width = '200px'
}) {

  return (
    <input
      className="search-input"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{ width }}
    />
  );
}

export default SearchInput;