// components/dashboard/DocumentsTable.jsx
"use client";

import { Download, Edit, MoreVertical, Brain, ChevronDown } from "lucide-react";

const documents = [
  {
    id: 1,
    name: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "بارگذاری شده در تاریخ 1404.01.29",
    statusType: "uploaded",
    priority: "متوسط",
    priorityColor: "text-yellow-500",
  },
  {
    id: 2,
    name: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "دانلود شده در تاریخ 1404.01.02",
    statusType: "downloaded",
    priority: "اولویت بالا",
    priorityColor: "text-red-500",
  },
  {
    id: 3,
    name: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "بازبینی شده در تاریخ 1404.02.02",
    statusType: "reviewed",
    priority: "اولویت بالا",
    priorityColor: "text-red-500",
  },
  {
    id: 4,
    name: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "",
    status: "در حال بررسی ارسال در تاریخ 1404.02.02",
    statusType: "pending",
    priority: "کم اهمیت",
    priorityColor: "text-orange-400",
  },
];

const getStatusStyle = (type) => {
  switch (type) {
    case "uploaded":
      return "border-gray-300 text-gray-600 bg-white";
    case "downloaded":
      return "border-blue-400 text-blue-600 bg-white";
    case "reviewed":
      return "border-green-400 text-green-600 bg-white";
    case "pending":
      return "border-red-300 text-red-500 bg-white";
    default:
      return "border-gray-300 text-gray-600 bg-white";
  }
};

function DocumentsTable() {
  return (
    <div dir="rtl">
      {/* عنوان */}
      <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
        اسناد من
      </h2>

      {/* هدر جدول */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 text-sm text-gray-600 font-medium">
        <div className="col-span-1"></div>
        <div className="col-span-3 text-right">نام سند</div>
        <div className="col-span-2 text-center flex items-center justify-center gap-1">
          آخرین بازدید
          <ChevronDown className="w-3 h-3" />
        </div>
        <div className="col-span-3 text-center">وضعیت</div>
        <div className="col-span-2 text-center flex items-center justify-center gap-1">
          اولویت
          <ChevronDown className="w-3 h-3" />
        </div>
        <div className="col-span-1 text-center">ویرایش و دانلود</div>
      </div>

      {/* ردیف‌های اسناد */}
      <div className="space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="grid grid-cols-12 gap-4 items-center bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4 hover:shadow-md transition-shadow"
          >
            {/* منوی سه نقطه */}
            <div className="col-span-1 flex justify-center">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* نام سند */}
            <div className="col-span-3 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm">{doc.name}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  حجم فایل : {doc.size}
                </p>
              </div>
            </div>

            {/* آخرین بازدید */}
            <div className="col-span-2 text-center text-sm text-gray-700">
              {doc.lastVisit}
            </div>

            {/* وضعیت */}
            <div className="col-span-3 flex justify-center">
              <span
                className={`px-4 py-1.5 rounded-full border text-xs ${getStatusStyle(
                  doc.statusType,
                )}`}
              >
                {doc.status}
              </span>
            </div>

            {/* اولویت */}
            <div className="col-span-2 flex items-center justify-center gap-1">
              <span className={`text-lg ${doc.priorityColor}`}>●</span>
              <span className="text-sm text-gray-700">{doc.priority}</span>
            </div>

            {/* دکمه‌ها */}
            <div className="col-span-1 flex items-center justify-center gap-1">
              <button className="p-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentsTable;
