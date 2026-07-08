// components/dashboard/TrainingRow.jsx
"use client";

import { FiPlay, FiImage } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { TbMapPin } from "react-icons/tb";

function TrainingRow({ training }) {
  return (
    <div className="bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 px-4 md:px-6 py-3">
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-12 gap-4 items-center">
        {/* ویدیوی آموزشی */}
        <div className="col-span-3 flex items-center gap-3">
          <button className="w-11 h-11 rounded-full border-2 border-primary-7 flex items-center justify-center text-primary-7 hover:bg-primary-0 transition-colors flex-shrink-0">
            <FiPlay className="w-5 h-5 mr-0.5" />
          </button>
          <div className="text-right">
            <h3 className="font-bold text-black text-base">{training.title}</h3>
            <p className="text-xs text-gray-500 mt-0.5">
              حجم فایل : {training.size}
            </p>
          </div>
        </div>

        {/* فایل های نمونه */}
        <div className="col-span-3 flex items-center justify-center gap-2">
          {Array.from({ length: training.sampleFiles }).map((_, i) => (
            <button
              key={i}
              className="w-10 h-10 rounded-lg border border-primary-7 flex items-center justify-center text-primary-7 hover:bg-primary-0 transition-colors"
            >
              <FiImage className="w-5 h-5" />
            </button>
          ))}
        </div>

        {/* نقشه راه */}
        <div className="col-span-3 flex items-center justify-center gap-2 text-gray-700">
          <TbMapPin className="w-5 h-5 text-primary-7" />
          <span className="text-sm">دانلود نقشه راه</span>
        </div>

        {/* کتابچه راهنما */}
        <div className="col-span-3 flex justify-center">
          <button className="w-14 h-11 rounded-xl bg-primary-7 text-white flex items-center justify-center hover:bg-primary-7/90 transition-colors">
            <HiOutlineBookOpen className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col gap-4 py-2">
        {/* عنوان + ویدیو */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-full border-2 border-primary-7 flex items-center justify-center text-primary-7">
              <FiPlay className="w-5 h-5 mr-0.5" />
            </button>
            <div>
              <h3 className="font-bold text-black text-sm">{training.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">
                حجم فایل : {training.size}
              </p>
            </div>
          </div>
          <button className="w-11 h-10 rounded-xl bg-primary-7 text-white flex items-center justify-center">
            <HiOutlineBookOpen className="w-5 h-5" />
          </button>
        </div>

        {/* فایل های نمونه */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs text-gray-500">فایل های نمونه</span>
          <div className="flex items-center gap-2">
            {Array.from({ length: training.sampleFiles }).map((_, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-lg border border-primary-7 flex items-center justify-center text-primary-7"
              >
                <FiImage className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* نقشه راه */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs text-gray-500">نقشه راه</span>
          <button className="flex items-center gap-2 text-gray-700">
            <TbMapPin className="w-5 h-5 text-primary-7" />
            <span className="text-sm">دانلود نقشه راه</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainingRow;
