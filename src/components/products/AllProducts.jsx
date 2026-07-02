"use client";
import { useState } from "react";
import Product from "../UI/Product";
import Pagination from "../UI/Pagination";

// Mock data - 8 products
const mockProducts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: "بیزنس مدل اولیه",
  description: "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
  image: "/assets/images/product.png", // owl illustration
}));

const mockPagination = {
  currentPage: 1,
  totalPages: 3,
};

const AllProducts = () => {
  const [products] = useState(mockProducts);
  const [pagination] = useState(mockPagination);

  return (
    <>
      <div className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination pagination={pagination} />
    </>
  );
};

export default AllProducts;
