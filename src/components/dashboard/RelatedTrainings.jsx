// components/dashboard/RelatedTrainings.jsx
"use client";

import { useState } from "react";
import TrainingRow from "../categories/TraningRow";

const mockTrainings = [
  {
    id: 1,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    sampleFiles: 4,
    mapDownloadUrl: "#",
    guideBookUrl: "#",
    videoUrl: "#",
  },
  {
    id: 2,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    sampleFiles: 4,
    mapDownloadUrl: "#",
    guideBookUrl: "#",
    videoUrl: "#",
  },
];

function RelatedTrainings() {
  const [trainings] = useState(mockTrainings);

  return (
    <div className="px-4 md:px-8 mt-10 md:mt-14">
      {/* Title */}
      <h2 className="text-center text-black text-xl md:text-2xl font-bold mb-6">
        آموزش های مرتبط
      </h2>

      {/* Table Header - فقط دسکتاپ */}
      <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 text-sm text-gray-700 font-medium border-b border-gray-200">
        <div className="col-span-3 text-center">ویدیوی آموزشی</div>
        <div className="col-span-3 text-center">فایل های نمونه</div>
        <div className="col-span-3 text-center">نقشه راه</div>
        <div className="col-span-3 text-center">کتابچه راهنما</div>
      </div>

      {/* Rows */}
      <div className="space-y-4 md:space-y-5 mt-6">
        {trainings.map((item) => (
          <TrainingRow key={item.id} training={item} />
        ))}
      </div>
    </div>
  );
}

export default RelatedTrainings;
