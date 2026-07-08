// components/dashboard/DocumentRow.jsx
"use client";

import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiDownload, FiEdit2 } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";

const statusConfig = {
  uploaded: {
    label: "بارگذاری شده در تاریخ",
    className: "border-gray-300 text-gray-600 bg-white",
  },
  downloaded: {
    label: "دانلود شده در تاریخ",
    className: "border-primary-7 text-primary-7 bg-white",
  },
  reviewed: {
    label: "بازبینی شده در تاریخ",
    className: "border-green-500 text-green-600 bg-white",
  },
  pending: {
    label: "در حال بررسی ارسال در تاریخ",
    className: "border-red-400 text-red-500 bg-white",
  },
};

const priorityConfig = {
  low: { label: "کم اهمیت", dotColor: "bg-yellow-400" },
  medium: { label: "متوسط", dotColor: "bg-yellow-400" },
  high: { label: "اولویت بالا", dotColor: "bg-red-500" },
};

function DocumentRow({ document }) {
  const status = statusConfig[document.status] || statusConfig.uploaded;
  const priority = priorityConfig[document.priority] || priorityConfig.medium;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 px-4 md:px-6 py-4">
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-12 gap-4 items-center">
        {/* نام سند */}
        <div className="col-span-3 flex items-center gap-3 ">
          <div className="w-12 h-12 rounded-full bg-primary-0 flex items-center justify-center flex-shrink-0">
            <GiBrain className="w-6 h-6 text-primary-7" />
          </div>
          <div className="text-right">
            <h3 className="font-bold text-black text-base">{document.title}</h3>
            <p className="text-xs text-gray-500 mt-1">
              حجم فایل : {document.size}
            </p>
          </div>
        </div>

        {/* آخرین بازدید */}
        <div className="col-span-2 text-center text-sm text-gray-700">
          {document.lastVisit}
        </div>

        {/* وضعیت */}
        <div className="col-span-3 flex justify-center">
          <span
            className={`px-4 py-1.5 rounded-full border text-xs whitespace-nowrap ${status.className}`}
          >
            {status.label} {document.statusDate}
          </span>
        </div>

        {/* اولویت */}
        <div className="col-span-2 flex items-center justify-center gap-2">
          <span className={`w-2 h-2 rounded-full ${priority.dotColor}`}></span>
          <span className="text-sm text-gray-700">{priority.label}</span>
        </div>

        {/* دکمه‌ها */}
        <div className="col-span-2 flex items-center justify-center gap-2">
          <button className="p-2 rounded-lg bg-primary-7 text-white hover:bg-primary-7/90 transition-colors">
            <FiDownload className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg border border-primary-7 text-primary-7 hover:bg-primary-0 transition-colors">
            <FiEdit2 className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <HiOutlineDotsVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary-0 flex items-center justify-center">
              <GiBrain className="w-5 h-5 text-primary-7" />
            </div>
            <div>
              <h3 className="font-bold text-black text-sm">{document.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">
                حجم فایل : {document.size}
              </p>
            </div>
          </div>
          <button className="p-1 text-gray-400">
            <HiOutlineDotsVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">{document.lastVisit}</span>
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${priority.dotColor}`}
            ></span>
            <span className="text-gray-700">{priority.label}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <span
            className={`px-3 py-1 rounded-full border text-xs ${status.className}`}
          >
            {status.label} {document.statusDate}
          </span>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-7 text-primary-7 text-sm">
            <FiEdit2 className="w-4 h-4" />
            <span>ویرایش</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-7 text-white text-sm">
            <FiDownload className="w-4 h-4" />
            <span>دانلود</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentRow;
