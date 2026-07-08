// components/dashboard/CategoriesList.jsx
"use client";
import CategoryCard from "../categories/CategoryCard";

// Mock data
const categories = [
  {
    id: 1,
    title: "بیزنس مدل ...",
    date: "12 اردیبهشت ، 1404",
    count: 3,
  },
  {
    id: 2,
    title: "بیزنس مدل ...",
    date: "12 اردیبهشت ، 1404",
    count: 3,
  },
  {
    id: 3,
    title: "بیزنس مدل ...",
    date: "12 اردیبهشت ، 1404",
    count: 3,
  },
  {
    id: 4,
    title: "بیزنس مدل ...",
    date: "12 اردیبهشت ، 1404",
    count: 3,
  },
  {
    id: 5,
    title: "بیزنس مدل ...",
    date: "12 اردیبهشت ، 1404",
    count: 3,
  },
  {
    id: 6,
    title: "بیزنس مدل ...",
    date: "12 اردیبهشت ، 1404",
    count: 3,
  },
];

function CategoriesList() {
  return (
    <div className="px-4 md:px-8 mt-10 md:mt-14">
      {/* Title */}
      <h2 className="text-center text-black text-xl md:text-2xl font-bold mb-8">
        دسته بندی ها
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
