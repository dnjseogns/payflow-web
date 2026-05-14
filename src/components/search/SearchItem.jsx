function SearchItem({
  label,
  children
}) {

  return (
    <div className="search-item">

      <div className="search-item-label">
        {label}
      </div>

      <div className="search-item-content">
        {children}
      </div>

    </div>
  );
}

export default SearchItem;