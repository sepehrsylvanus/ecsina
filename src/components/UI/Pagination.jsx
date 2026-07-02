"use client";
import { useState } from "react";

const Pagination = ({ pagination }) => {
  const [currentPage, setCurrentPage] = useState(pagination?.currentPage || 1);
  const totalPages = pagination?.totalPages || 3;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-12 flex items-center justify-center gap-4 text-black">
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="text-base md:text-lg font-semibold disabled:opacity-40 cursor-pointer hover:text-primary-7 transition-colors"
      >
        بعدی
      </button>

      <div className="flex items-center gap-3">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`text-base md:text-lg font-semibold cursor-pointer transition-colors ${
              currentPage === page
                ? "text-primary-7 underline underline-offset-4"
                : "text-black hover:text-primary-7"
            }`}
          >
            {page.toLocaleString("fa-IR")}
          </button>
        ))}
      </div>

      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="text-base md:text-lg font-semibold disabled:opacity-40 cursor-pointer hover:text-primary-7 transition-colors"
      >
        قبلی
      </button>
    </div>
  );
};

export default Pagination;
