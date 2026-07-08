// components/dashboard/RelatedTrainings.jsx
"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import DocumentRow from "../categories/DocumentRow";
const mockDocuments = [
  {
    id: 1,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "uploaded",
    statusDate: "1404.01.29",
    priority: "medium",
  },
  {
    id: 2,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "downloaded",
    statusDate: "1404.01.02",
    priority: "high",
  },
  {
    id: 3,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "reviewed",
    statusDate: "1404.02.02",
    priority: "high",
  },
  {
    id: 4,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    lastVisit: "14 اردیبهشت 1404",
    status: "pending",
    statusDate: "1404.02.02",
    priority: "low",
  },
];

function RelatedTrainings() {
  const [documents] = useState(mockDocuments);

  return (
    <div className="px-4 md:px-8 mt-10 md:mt-14">
      {/* Title */}
      <h2 className="text-center text-black text-xl md:text-2xl font-bold mb-6">
        اسناد من
      </h2>

      {/* Table Header - فقط در دسکتاپ */}
      <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 text-sm text-gray-600 font-medium">
        <div className="col-span-3 text-right">نام سند</div>
        <div className="col-span-2 flex items-center justify-center gap-1 cursor-pointer hover:text-primary-7">
          <span>آخرین بازدید</span>
          <FiChevronDown className="w-4 h-4" />
        </div>
        <div className="col-span-3 text-center">وضعیت</div>
        <div className="col-span-2 flex items-center justify-center gap-1 cursor-pointer hover:text-primary-7">
          <span>اولویت</span>
          <FiChevronDown className="w-4 h-4" />
        </div>
        <div className="col-span-2 text-center">ویرایش و دانلود</div>
      </div>

      {/* Rows */}
      <div className="space-y-3 md:space-y-4 mt-2">
        {documents.map((doc) => (
          <DocumentRow key={doc.id} document={doc} />
        ))}
      </div>
    </div>
  );
}

export default RelatedTrainings;
