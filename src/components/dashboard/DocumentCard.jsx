"use client";

import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuBrain } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { LiaPenSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";

// نگاشت وضعیت به متن و رنگ
const statusMap = {
  uploaded: {
    label: "بارگذاری شده در تاریخ",
    color: "text-primary-7 border-primary-7/40",
  },
  downloaded: {
    label: "دانلود شده در تاریخ",
    color: "text-primary-7 border-primary-7/40",
  },
  pending: {
    label: "در حال بررسی ارسال در تاریخ",
    color: "text-orange-500 border-orange-400",
  },
  reviewed: {
    label: "بازبینی شده در تاریخ",
    color: "text-green-600 border-green-500",
  },
};

function DocumentCard({ document }) {
  const status = statusMap[document.status] || statusMap.uploaded;

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-3">
      {/* Top: Menu icon */}
      <div className="flex justify-start">
        <button
          className="text-gray-500 hover:text-black cursor-pointer p-1"
          aria-label="گزینه‌ها"
        >
          <HiOutlineDotsVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Brain icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-primary-7 rounded-2xl flex items-center justify-center">
          <LuBrain className="w-12 h-12 md:w-14 md:h-14 text-primary-7" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-center text-black font-bold text-base md:text-lg mt-2">
        {document.title}
      </h3>

      {/* File Info */}
      <div className="text-center space-y-1">
        <p className="text-gray-600 text-xs md:text-sm">
          حجم فایل : {document.size}
        </p>
        <p className="text-gray-600 text-xs md:text-sm">{document.date}</p>
      </div>

      {/* Status Badge */}
      <div className="flex justify-center">
        <span
          className={`inline-block border-2 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold bg-white ${status.color}`}
        >
          {status.label} {document.statusDate}
        </span>
      </div>

      {/* Quality */}
      <div className="flex items-center justify-center gap-1">
        <span className="text-gray-700 text-xs md:text-sm">
          {document.quality}
        </span>
        <GoDotFill className="w-3 h-3 text-yellow-500" />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 mt-2">
        {/* Edit Button */}
        <button
          className="flex-1 border-2 border-primary-7 rounded-xl py-2.5 flex items-center justify-center hover:bg-primary-7/5 transition-colors cursor-pointer"
          aria-label="ویرایش"
        >
          <LiaPenSolid className="w-5 h-5 text-primary-7" />
        </button>

        {/* Download Button */}
        <button
          className="flex-1 bg-primary-7 hover:bg-primary-8 rounded-xl py-2.5 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="دانلود"
        >
          <FiDownload className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}

export default DocumentCard;
