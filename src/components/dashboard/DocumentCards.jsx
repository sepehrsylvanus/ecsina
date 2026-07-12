"use client";

import { Download, Edit, MoreVertical, Brain } from "lucide-react";

const documents = [
  {
    id: 1,
    name: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "بازبینی شده در تاریخ ۱۴۰۴.۰۲.۰۲",
    statusType: "reviewed",
    statusColor: "text-green-600 border-green-400",
    priority: "متوسط",
  },
  {
    id: 2,
    name: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "در حال بررسی ارسال در تاریخ ۱۴۰۴.۰۲.۰۲",
    statusType: "pending",
    statusColor: "text-red-500 border-red-300",
    priority: "متوسط",
  },
  {
    id: 3,
    name: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "دانلود شده در تاریخ ۱۴۰۴.۰۱.۰۲",
    statusType: "downloaded",
    statusColor: "text-blue-600 border-blue-400",
    priority: "متوسط",
  },
  {
    id: 4,
    name: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "بارگذاری شده در تاریخ ۱۴۰۴.۰۱.۲۹",
    statusType: "uploaded",
    statusColor: "text-gray-600 border-gray-300",
    priority: "متوسط",
  },
];

function DocumentCards() {
  return (
    <div dir="rtl" className="px-4 md:px-8 mt-10 md:mt-14">
      {/* عنوان */}
      <h2 className="text-center text-black text-xl md:text-2xl font-bold mb-8">
        اسناد
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow"
          >
            {/* منوی سه نقطه */}
            <div className="flex justify-start mb-4">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* آیکون مغز */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            {/* عنوان */}
            <h3 className="text-black font-bold text-base text-center mb-2">
              {doc.name}
            </h3>

            {/* حجم فایل */}
            <p className="text-gray-500 text-xs text-center mb-4">
              حجم فایل : {doc.size}
            </p>

            {/* تاریخ */}
            <p className="text-gray-500 text-xs text-center mb-4">
              14 اردیبهشت ، 1404
            </p>

            {/* وضعیت */}
            <div className="flex justify-center mb-4">
              <span
                className={`px-4 py-1.5 rounded-full border text-xs ${doc.statusColor}`}
              >
                {doc.status}
              </span>
            </div>

            {/* اولویت */}
            <div className="flex items-center justify-center gap-1 mb-4">
              <span className="text-xs text-gray-500">متوسط</span>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>

            {/* دکمه‌ها */}
            <div className="flex items-center justify-center gap-2 mt-auto">
              <button className="p-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors">
                <Download className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentCards;
