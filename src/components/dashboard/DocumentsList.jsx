"use client";

import DocumentCard from "./DocumentCard";

// Mock data
const documents = [
  {
    id: 1,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    date: "14 اردیبهشت ، 1404",
    status: "uploaded", // بارگذاری شده
    statusDate: "1404.01.29",
    quality: "متوسط",
  },
  {
    id: 2,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    date: "14 اردیبهشت ، 1404",
    status: "downloaded", // دانلود شده
    statusDate: "1404.01.02",
    quality: "متوسط",
  },
  {
    id: 3,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    date: "14 اردیبهشت ، 1404",
    status: "pending", // در حال بررسی
    statusDate: "1404.02.02",
    quality: "متوسط",
  },
  {
    id: 4,
    title: "بیزنس مدل تجاری",
    size: "9mg",
    date: "14 اردیبهشت ، 1404",
    status: "reviewed", // بازبینی شده
    statusDate: "1404.02.02",
    quality: "متوسط",
  },
];

function DocumentsList() {
  return (
    <div className="px-4 md:px-8 mt-12 md:mt-16">
      {/* Title */}
      <h2 className="text-center text-black text-2xl md:text-3xl font-bold mb-8">
        اسناد
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} document={doc} />
        ))}
      </div>
    </div>
  );
}

export default DocumentsList;
