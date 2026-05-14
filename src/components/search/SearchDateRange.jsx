import SearchDatePicker from './SearchDatePicker';

function SearchDateRange({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange
}) {

  return (
    <div className="search-date-range">

      <SearchDatePicker
        value={startDate}
        onChange={onStartDateChange}
      />

      <span className="search-date-range-separator">
        ~
      </span>

      <SearchDatePicker
        value={endDate}
        onChange={onEndDateChange}
      />

    </div>
  );
}

export default SearchDateRange;