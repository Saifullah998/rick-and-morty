import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  // Create an array of page numbers to display
  const getPageNumbers = () => {
    let start = Math.max(1, page - 2); // Start 2 pages before current
    let end = Math.min(totalPages, page + 2); // End 2 pages after current

    let pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="pagination flex justify-center items-center gap-4 py-12 ">
      <button
        onClick={handlePrevious}
        disabled={page === 1}
        className={`px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition ${
          page === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Previous
      </button>

      <div className="flex gap-2">
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={`px-4 py-2 text-white rounded-lg shadow-md hover:bg-blue-700 transition ${
              page === pageNumber ? "bg-blue-700" : "bg-blue-600"
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className={`px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition ${
          page === totalPages ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
