"use client";
import { BiImage, BiDownload } from "react-icons/bi";
import { PiShareNetworkBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import Button from "../UI/Button";

const tabs = [
  { id: 1, title: "فیلم آموزشی" },
  { id: 2, title: "کتابچه راهنما" },
  { id: 3, title: "نقشه راه یادگیری" },
  { id: 4, title: "فایل مثال" },
];

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container mx-auto px-4 mt-6 md:mt-10">
      <div className="bg-secondary-2 border border-primary-7 rounded-2xl md:rounded-3xl px-4 md:px-10 py-6 md:py-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-black font-bold text-lg md:text-3xl">
            عنوان قالب
          </h2>

          {/* Icons - Right side */}
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-2">
              <PiShareNetworkBold className="w-6 h-6 text-primary-7" />
              <p className="text-primary-7 text-sm md:text-base font-semibold">
                اشتراک گذاری
              </p>
            </span>
            <span className="flex items-center gap-2">
              <BiDownload className="w-6 h-6 text-primary-7" />
              <p className="text-primary-7 text-sm md:text-base font-semibold">
                12 دانلود
              </p>
            </span>
          </div>
        </div>

        {/* Tabs + Gallery Row */}
        <div className="mt-6">
          <div className="bg-primary-0 flex justify-between items-center rounded-t-2xl">
            {/* Tabs */}
            <div className="flex items-center flex-1 overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  onClick={() => setActiveTab(tab.id)}
                  key={tab.id}
                  className={`px-3 md:px-6 py-3 md:py-4 text-xs md:text-base font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap ${
                    index === 0 ? "rounded-tr-2xl" : ""
                  } ${
                    activeTab === tab.id
                      ? "bg-primary-8 text-white"
                      : "bg-transparent text-primary-7"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Gallery Icons */}
            <div className="hidden md:flex items-center gap-2 pl-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <button
                  key={index}
                  className="hover:opacity-70 transition-opacity"
                >
                  <BiImage className="w-8 h-8 text-primary-7" />
                </button>
              ))}
            </div>
          </div>

          {/* Video/Preview Area - checkered pattern */}
          <div
            className="relative w-full h-64 md:h-96 flex items-center justify-center rounded-b-2xl"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #e5e5e5 25%, transparent 25%),
                linear-gradient(-45deg, #e5e5e5 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #e5e5e5 75%),
                linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)
              `,
              backgroundSize: "24px 24px",
              backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px",
              backgroundColor: "#f5f5f5",
            }}
          >
            {/* Play button */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
              <FaPlay className="w-6 h-6 md:w-8 md:h-8 text-primary-7 ml-1" />
            </div>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex justify-between md:hidden mt-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <PiShareNetworkBold className="w-5 h-5 text-primary-7" />
              <p className="text-primary-7 text-xs font-semibold">
                اشتراک گذاری
              </p>
            </span>
            <span className="flex items-center gap-1">
              <BiDownload className="w-5 h-5 text-primary-7" />
              <p className="text-primary-7 text-xs font-semibold">12 دانلود</p>
            </span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <BiImage key={index} className="w-5 h-5 text-primary-7" />
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-6">
          <button className="w-full bg-primary-7 hover:bg-primary-8 text-white font-bold py-4 md:py-5 rounded-xl md:rounded-2xl text-base md:text-xl transition-all duration-200 cursor-pointer">
            دانلود قالب
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
