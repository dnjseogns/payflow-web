function SearchSelect({
  value = '',
  options = [],
  onChange,
  width = '160px'
}) {

  return (
    <select
      className="search-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width }}
    >

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}

    </select>
  );
}

export default SearchSelect;