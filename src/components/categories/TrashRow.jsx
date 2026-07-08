// components/dashboard/TrashRow.jsx
"use client";

import { FiRefreshCw, FiTrash2 } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";

function TrashRow({ item, onRestore, onDelete }) {
  return (
    <div className="bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 px-4 md:px-6 py-3">
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-12 gap-4 items-center">
        {/* نام سند */}
        <div className="col-span-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary-0 flex items-center justify-center flex-shrink-0">
            <GiBrain className="w-6 h-6 text-primary-7" />
          </div>
          <div className="text-right">
            <h3 className="font-bold text-black text-base">{item.title}</h3>
            <p className="text-xs text-gray-500 mt-1">حجم فایل : {item.size}</p>
          </div>
        </div>

        {/* تاریخ حذف */}
        <div className="col-span-5 text-center text-sm text-gray-700">
          {item.deletedDate}
        </div>

        {/* دکمه‌ها */}
        {/* دکمه‌ها */}
        <div className="col-span-3 flex items-center justify-end gap-2">
          <button
            onClick={() => onRestore?.(item.id)}
            className="p-2.5 rounded-lg bg-primary-7 text-white hover:bg-primary-7/90 transition-colors"
            title="بازیابی"
          >
            <FiRefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete?.(item.id)}
            className="p-2.5 rounded-lg border border-primary-7 text-primary-7 hover:bg-primary-0 transition-colors"
            title="حذف دائمی"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-3 py-2">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-primary-0 flex items-center justify-center flex-shrink-0">
            <GiBrain className="w-5 h-5 text-primary-7" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-black text-sm">{item.title}</h3>
            <p className="text-xs text-gray-500 mt-0.5">
              حجم فایل : {item.size}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs text-gray-500">{item.deletedDate}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onRestore?.(item.id)}
              className="p-2 rounded-lg bg-primary-7 text-white"
            >
              <FiRefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete?.(item.id)}
              className="p-2 rounded-lg border border-primary-7 text-primary-7"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrashRow;
