// components/dashboard/CategoryCard.jsx
"use client";

import Link from "next/link";
import { HiOutlineFolder } from "react-icons/hi2";

function CategoryCard({ category }) {
  return (
    <Link
      href={`/user/categories/category/${category.id}`}
      className="group bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-6 md:p-8 min-h-[180px] flex flex-col cursor-pointer border border-transparent hover:border-primary-7/20"
    >
      {/* Icon top */}
      <div className="flex justify-start">
        <HiOutlineFolder className="w-7 h-7 md:w-8 md:h-8 text-primary-7" />
      </div>

      {/* Title */}
      <h3 className="text-black font-bold text-lg md:text-xl mt-4 text-right">
        {category.title}
      </h3>

      {/* Meta info */}
      <p className="text-gray-500 text-xs md:text-sm mt-3 text-right">
        ایجاد شده در {category.date} . {category.count} سند
      </p>
    </Link>
  );
}

export default CategoryCard;
