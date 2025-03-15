"use client";
import React, { useState } from "react";
import styles from "../pagination/styles.module.scss";

const Pagination = ({ totalPages = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className={styles.prevNext}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNum = index + 1;
        return (
          <button
            key={pageNum}
            className={`${styles.pageNumber} ${currentPage === pageNum ? styles.active : ""}`}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        );
      })}

      <button 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className={styles.prevNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
