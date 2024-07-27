'use client';
import React from 'react';

function Pagination({
  currentPage,
  morePostAvailable,
}: {
  currentPage: number;
  morePostAvailable: boolean;
}) {
  const handlePrev = () => {
    if (currentPage > 1) {
      window.location.href = '/post/?page=' + (Number(currentPage) - 1);
    }
  };
  const handleNext = () => {
    if (morePostAvailable) {
      window.location.href = '/post/?page=' + (Number(currentPage) + 1);
    }
  };
  const colorForNext = morePostAvailable ? 'blue' : 'gray';
  const colorForPrev = currentPage == 1 ? 'gray' : 'blue';
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <p
              onClick={handlePrev}
              aria-disabled={currentPage == 1}
              className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-${colorForPrev}-500 bg-white border border-e-0 border-${colorForPrev}-300 rounded-s-lg hover:bg-${colorForPrev}-100 hover:text-${colorForPrev}-700`}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </p>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-blue-500 bg-white border border-blue-300 hover:bg-blue-100 hover:text-blue-700"
            >
              {currentPage}
            </a>
          </li>
          <li>
            <p
              onClick={handleNext}
              className={`flex items-center justify-center px-4 h-10 leading-tight text-${colorForNext}-500 bg-white border border-${colorForNext}-300 rounded-e-lg hover:bg-${colorForNext}-100 hover:text-${colorForNext}-700`}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
