"use client";

import { useState } from "react";
import Image from "next/image";

function QuestionsPage() {
  const [formData, setFormData] = useState({
    subject: "",
    priority: "",
    message: "",
  });

  const priorities = [
    { value: "low", label: "کم" },
    { value: "medium", label: "متوسط" },
    { value: "high", label: "فوری" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Ticket submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <a
          href="/user/archive"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-7 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">بازگشت به لیست تیکت‌ها</span>
        </a>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
        ثبت تیکت جدید
      </h1>

      {/* Form Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subject Field */}
          <div className="relative">
            <label className="block text-left text-sm font-semibold text-black mb-2">
              موضوع تیکت :
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="موضوع..."
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-7 text-right"
                dir="rtl"
              />
              <Image
                src="/assets/icons/questions/Document.svg"
                alt="موضوع تیکت"
                width={20}
                height={20}
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          {/* Priority Dropdown */}
          <div className="relative">
            <label className="block text-left text-sm font-semibold text-black mb-2">
              اولویت :
            </label>
            <div className="relative">
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-7 text-right appearance-none bg-white"
                dir="rtl"
              >
                <option value="">بدون اولویت</option>
                {priorities.map((priority) => (
                  <option key={priority.value} value={priority.value}>
                    {priority.label}
                  </option>
                ))}
              </select>
              <Image
                src="/assets/icons/questions/Star.svg"
                alt="اولویت"
                width={20}
                height={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              />
              <svg
                className="absolute left-10 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="block text-left text-sm font-semibold text-black mb-2">
              متن تیکت :
            </label>
            <div className="relative">
              <textarea
                placeholder="متن تیکت..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={8}
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-7 text-right resize-none"
                dir="rtl"
              />
              <Image
                src="/assets/icons/questions/Comment.svg"
                alt="متن تیکت"
                width={20}
                height={20}
                className="absolute left-4 top-4"
              />
            </div>
          </div>

          {/* Upload Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Upload Image */}
            <button
              type="button"
              className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
            >
              <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <Image
                  src="/assets/icons/questions/Emoji.svg"
                  alt="آپلود تصویر"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-sm font-medium text-black">
                آپلود تصویر
              </span>
            </button>

            {/* Upload File */}
            <button
              type="button"
              className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
            >
              <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <Image
                  src="/assets/icons/questions/Document2.svg"
                  alt="آپلود فایل"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-sm font-medium text-black">آپلود فایل</span>
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-7 hover:bg-primary-8 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 text-lg"
          >
            ارسال تیکت
          </button>
        </form>
      </div>

      {/* Note */}
      <p className="text-center text-gray-600 mt-6 text-sm md:text-base">
        قبل از ارسال تیکت توجه کنید...
      </p>
    </div>
  );
}

export default QuestionsPage;
