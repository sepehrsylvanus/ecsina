"use client";
import FaqAccordion from "./FaqAccordion";
import ProductDetailsBox from "./ProductDetailsBox";

const ProductInfoSection = () => {
  return (
    <div className="container mx-auto px-4 mt-12 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* FAQ Section - 2/3 width */}
        <div className="md:col-span-2">
          <FaqAccordion />
        </div>

        {/* Details Box - 1/3 width */}
        <div className="md:col-span-1">
          <ProductDetailsBox />
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection;
