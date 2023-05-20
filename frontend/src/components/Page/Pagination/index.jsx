import { useState } from 'react';

function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const pagesCount = Math.ceil(items.length / itemsPerPage);
  const pages = Array.from(Array(pagesCount).keys());

  const handleClick = (page) => setCurrentPage(page);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return {
    currentPage,
    setCurrentPage: handleClick,
    pages,
    currentItems,
  };
}

export default usePagination;
