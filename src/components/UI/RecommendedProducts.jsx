"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useRef, useEffect } from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/product.png",
  },
  {
    id: 2,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/product.png",
  },
  {
    id: 3,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/product.png",
  },
  {
    id: 4,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/product.png",
  },
  {
    id: 5,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/product.png",
  },
];

const RecommendedProducts = () => {
  const [loaded, setLoaded] = useState(false);
  const timer = useRef(null);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: {
      perView: 1.2,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    if (!slider.current) return;
    timer.current = setInterval(() => {
      slider.current?.next();
    }, 4000);
    return () => clearInterval(timer.current);
  }, [slider]);

  return (
    <div className="container mx-auto px-4 mt-16 md:mt-24">
      <div className="relative">
        {/* Header with title + arrows */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-black font-bold text-lg md:text-3xl">
            قالب‌های پیشنهادی
          </h3>

          {loaded && slider.current && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => slider.current.next()}
                className="bg-primary-7 hover:bg-primary-8 rounded-lg p-2 cursor-pointer transition-colors"
              >
                <IoIosArrowForward className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => slider.current.prev()}
                className="bg-primary-7 hover:bg-primary-8 rounded-lg p-2 cursor-pointer transition-colors"
              >
                <IoIosArrowBack className="w-5 h-5 text-white" />
              </button>
            </div>
          )}
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {products.map((product) => (
            <div key={product.id} className="keen-slider__slide">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
