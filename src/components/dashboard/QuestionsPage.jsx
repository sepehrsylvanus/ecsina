"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function QuestionsPage() {
  const [formData, setFormData] = useState({
    subject: "",
    priority: "",
    message: "",
  });

  const priorities = [
    { value: "low", label: "کم", dot: "bg-green-500", badge: "bg-green-50 text-green-700" },
    { value: "medium", label: "متوسط", dot: "bg-amber-500", badge: "bg-amber-50 text-amber-700" },
    { value: "high", label: "فوری", dot: "bg-red-500", badge: "bg-red-50 text-red-700" },
  ];

  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const priorityRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (priorityRef.current && !priorityRef.current.contains(e.target)) {
        setIsPriorityOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedPriority = priorities.find((p) => p.value === formData.priority);

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
            <label className="block text-right text-sm font-semibold text-black mb-2">
              موضوع تیکت:
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="موضوع..."
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-7 text-right"
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
            <label className="block text-right text-sm font-semibold text-black mb-2">
              اولویت:
            </label>
            <div className="relative" ref={priorityRef}>
              <button
                type="button"
                onClick={() => setIsPriorityOpen((o) => !o)}
                className={`w-full flex items-center justify-between gap-2 px-4 py-3 border-2 rounded-xl bg-white text-right transition-all duration-200 cursor-pointer ${
                  isPriorityOpen
                    ? "border-primary-7 ring-2 ring-primary-7/15"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                dir="rtl"
              >
                <span
                  className={`flex-1 ${
                    selectedPriority ? "text-black" : "text-gray-400"
                  }`}
                >
                  {selectedPriority ? (
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${selectedPriority.badge}`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${selectedPriority.dot}`}
                      ></span>
                      {selectedPriority.label}
                    </span>
                  ) : (
                    "انتخاب اولویت..."
                  )}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                    isPriorityOpen ? "rotate-180" : ""
                  }`}
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
              </button>

              {isPriorityOpen && (
                <ul className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, priority: "" });
                        setIsPriorityOpen(false);
                      }}
                      className={`w-full text-right px-4 py-3 text-sm cursor-pointer transition-colors hover:bg-gray-50 ${
                        !formData.priority
                          ? "text-primary-7 bg-primary-7/5 font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      بدون اولویت
                    </button>
                  </li>
                  {priorities.map((priority) => (
                    <li key={priority.value}>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, priority: priority.value });
                          setIsPriorityOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 text-right px-4 py-3 text-sm cursor-pointer transition-colors hover:bg-gray-50 ${
                          formData.priority === priority.value
                            ? "bg-primary-7/5 font-medium"
                            : ""
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${priority.dot}`}
                        ></span>
                        <span
                          className={`flex-1 ${
                            formData.priority === priority.value
                              ? "text-primary-7"
                              : "text-gray-700"
                          }`}
                        >
                          {priority.label}
                        </span>
                        {formData.priority === priority.value && (
                          <svg
                            className="w-4 h-4 text-primary-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="block text-right text-sm font-semibold text-black mb-2">
              متن تیکت:
            </label>
            <div className="relative">
              <textarea
                placeholder="متن تیکت..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={8}
                className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-7 text-right resize-none"
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
