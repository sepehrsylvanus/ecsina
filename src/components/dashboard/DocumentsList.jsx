// components/dashboard/CategoriesList.jsx
"use client";
import { useState, useEffect } from "react";
import CategoryCard from "../categories/CategoryCard";
import { getHomeData } from "@/services/home/getHomeData";

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await getHomeData();

        if (error) {
          setError(error);
        } else {
          setCategories(data?.categories || []);
          setError(null);
        }
      } catch (err) {
        setError("خطا در دریافت اطلاعات");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return (
      <div className="px-4 md:px-8 mt-10 md:mt-14">
        <h2 className="text-center text-black text-xl md:text-2xl font-bold mb-8">
          دسته بندی ها
        </h2>
        <div className="text-center text-gray-500 py-10">
          در حال بارگذاری...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 md:px-8 mt-10 md:mt-14">
        <h2 className="text-center text-black text-xl md:text-2xl font-bold mb-8">
          دسته بندی ها
        </h2>
        <div className="text-center text-gray-500 py-10">{error}</div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 mt-10 md:mt-14">
      {/* Title */}
      <h2 className="text-center text-black text-xl md:text-2xl font-bold mb-8">
        دسته بندی ها
      </h2>

      {/* Empty State */}
      {categories.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          دسته بندی یافت نشد
        </div>
      ) : (
        /* Cards Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoriesList;
