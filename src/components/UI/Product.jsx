import Image from "next/image";
import { GoArrowUpLeft } from "react-icons/go";

const Product = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col">
      {/* Product Image */}
      <div className="w-full h-56 bg-gradient-to-br from-purple-200 via-pink-100 to-purple-100 flex items-center justify-center p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={180}
          height={180}
          className="object-contain"
        />
      </div>
      {/* Product Info */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <h3 className="text-black text-lg font-bold text-center">
          {product.title}
        </h3>
        <p className="text-gray-700 text-sm text-center leading-6 flex-1">
          {product.description}
        </p>
        <button className="self-start text-primary-7 hover:text-primary-8 transition-colors">
          <GoArrowUpLeft size={22} />
        </button>
      </div>
    </div>
  );
};

export default Product;
