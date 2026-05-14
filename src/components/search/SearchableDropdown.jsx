import { useState, useMemo, useEffect, useRef } from 'react';
import SearchInput from './SearchInput';

function SearchableDropdown({
  value,
  options = [],
  onChange,
  placeholder
}) {
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);

  const filteredOptions = useMemo(() => {
    if (!inputValue) return options;
    return options.filter(opt =>
      opt.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue, options]);

  const handleSelect = (opt) => {
    setInputValue(opt.label);
    onChange(opt.value);
    setOpen(false);
  };

  // 외부 클릭 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="searchable-dropdown" ref={wrapperRef}>

      <SearchInput
        value={inputValue}
        placeholder={placeholder}
        onChange={(val) => {
          setInputValue(val);
          onChange(val);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />

      {open && (
        <ul className="dropdown">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <li
                key={opt.value}
                className="dropdown-item"
                onClick={() => handleSelect(opt)}
              >
                {opt.label}
              </li>
            ))
          ) : (
            <li className="empty">검색 결과 없음</li>
          )}
        </ul>
      )}

    </div>
  );
}

export default SearchableDropdown;