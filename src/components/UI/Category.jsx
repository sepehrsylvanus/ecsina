import Image from "next/image";

const Category = ({ category }) => {
  return (
    <div className="w-full max-w-[220px] bg-white border-2 border-primary-7/40 rounded-2xl p-6 flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
      {/* Icon box */}
      <div className="w-24 h-24 md:w-28 md:h-28 bg-primary-7 rounded-2xl flex items-center justify-center">
        <Image
          src={category.icon}
          alt={category.title}
          width={60}
          height={60}
          className="brightness-0 invert"
        />
      </div>
      {/* Title */}
      <h4 className="text-black text-lg md:text-xl font-bold text-center">
        {category.title}
      </h4>
    </div>
  );
};

export default Category;
