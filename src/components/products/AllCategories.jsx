"use client";
import Category from "../UI/Category";

const allCategories = [
  {
    title: "بیزنس مدل",
    icon: "/assets/icons/Status1.svg",
    id: 1,
  },
  {
    title: "بوم کسب و کار",
    icon: "/assets/icons/Computer.svg",
    id: 2,
  },
  {
    title: "پروپوزال ها",
    icon: "/assets/icons/Document.svg",
    id: 3,
  },
  {
    title: "بیزنس پلن",
    icon: "/assets/icons/Status2.svg",
    id: 4,
  },
  {
    title: "بوم ناب",
    icon: "/assets/icons/Status3.svg",
    id: 5,
  },
];

const AllCategories = () => {
  return (
    <div className="mt-10 md:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 place-items-center">
      {allCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default AllCategories;
