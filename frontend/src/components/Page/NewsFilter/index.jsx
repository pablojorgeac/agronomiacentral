import { useState, useMemo } from 'react';

export function useFilter(items) {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(!searchTerm);

  const filteredItems = useMemo(() => {
    if (!searchTerm) {
      return items;
    }

    const lowercaseSearchTerm = searchTerm.toLowerCase();

    return items.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(lowercaseSearchTerm)
      )
    );
  }, [items, searchTerm]);

  function handleSearchTermChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
  }

  return [filteredItems, handleSearchTermChange];
}
