function SearchDatePicker({
  value = '',
  onChange,
  width = '160px'
}) {

  return (
    <input
      className="search-date-picker"
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width }}
    />
  );
}

export default SearchDatePicker;