import SearchInput from './SearchInput';
import SearchSelect from './SearchSelect';

function SearchKeywordType({
  type,
  keyword,

  types = [],

  onTypeChange,
  onKeywordChange
}) {

  return (
    <div className="search-keyword-type">

      <SearchSelect
        width="140px"
        value={type}
        options={types}
        onChange={onTypeChange}
      />

      <SearchInput
        value={keyword}
        onChange={onKeywordChange}
      />

    </div>
  );
}

export default SearchKeywordType;