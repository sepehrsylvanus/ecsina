"use client";

import React, { useState, useRef, useEffect } from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { LuDownload } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { MdRefresh } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function TemplatesPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [activeTab, setActiveTab] = useState("inReview"); // "reviewed" | "inReview"
  const fileInputRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openMenuId !== null) {
        setOpenMenuId(null);
      }
    };

    if (openMenuId !== null) {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [openMenuId]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const intervalRef = useRef(null);

  // پاک کردن interval آپلود هنگام unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const startUploadSimulation = () => {
    clearInterval(intervalRef.current);
    setIsUploading(true);
    setUploadProgress(0);

    intervalRef.current = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    // Simulate upload process
    startUploadSimulation();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Simulate upload process
      startUploadSimulation();
    }
  };

  const toggleMenu = (id, e) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">بازبینی اسناد</h1>
        <p className="text-gray-600 text-sm">
          سند مورد نظرت رو اینجا بارگذاری کن تا تیم ما بررسی‌ش کنه. بعد از
          بازبینی، نتیجه از طریق دشبورد و اعلان‌ها در دسترس خواهد بود.
        </p>
      </div>

      {/* Upload Area */}
      <div
        className={`bg-white rounded-2xl border-2 border-dashed p-8 mb-8 transition-all duration-300 ${
          isDragging
            ? "border-primary-7 bg-primary-7/5"
            : "border-gray-300 hover:border-primary-7/50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        {isUploading ? (
          /* Uploading State */
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6 w-full">
              {/* Left side - Icons */}
              <div className="flex flex-col gap-4">
                <MdDelete className="w-8 h-8 text-red-500" />
                <MdRefresh className="w-8 h-8 text-blue-500" />
              </div>

              {/* Middle - Progress */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  بیزنس مدل تجاری
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  ارسال انجام شد، دوباره تلاش کنید.
                </p>
              </div>

              {/* Right side - Download icon */}
              <LuDownload className="w-12 h-12 text-primary-7" />
            </div>
          </div>
        ) : (
          /* Normal State */
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <p className="text-gray-700 text-base">
                <span className="text-primary-7 font-semibold cursor-pointer hover:underline">
                  کلیک کنید
                </span>{" "}
                یا{" "}
                <span className="text-primary-7 font-semibold cursor-pointer hover:underline">
                  فایل خود را بکشید
                </span>{" "}
                و اینجا رها کنید.
              </p>
              <LuDownload className="w-10 h-10 text-primary-7" />
            </div>
            <p className="text-gray-500 text-sm">
              فرمت‌های مجاز : ... حداکثر ظرفیت(...)
            </p>
          </div>
        )}
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("reviewed")}
          className={`px-8 py-3 rounded-full border-2 font-medium transition-colors ${
            activeTab === "reviewed"
              ? "border-primary-7 text-primary-7"
              : "border-gray-300 text-gray-700 hover:border-primary-7 hover:text-primary-7"
          }`}
        >
          اسناد بازبینی شده
        </button>
        <button
          onClick={() => setActiveTab("inReview")}
          className={`px-8 py-3 rounded-full border-2 font-medium transition-colors ${
            activeTab === "inReview"
              ? "border-primary-7 text-primary-7"
              : "border-gray-300 text-gray-700 hover:border-primary-7 hover:text-primary-7"
          }`}
        >
          در حال بررسی
        </button>
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        {/* Document Card 1 */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4 relative">
          {/* File Icon */}
          <div className="w-16 h-16 bg-primary-7 rounded-lg flex items-center justify-center flex-shrink-0">
            <HiOutlineDocumentText className="w-8 h-8 text-white" />
          </div>

          {/* Document Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              بیزنس مدل تجاری
            </h3>
            <p className="text-sm text-gray-500">حجم فایل : 9mg</p>
          </div>

          {/* Status Badge */}
          <div className="px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <span className="text-green-600 text-sm">
              بازبینی شده در تاریخ ۰۴.۰۲.۰۲
            </span>
          </div>

          {/* Download Icon */}
          <div
            className={`w-12 h-12 border-2 rounded-full flex items-center justify-center flex-shrink-0 ${
              activeTab === "reviewed"
                ? "border-primary-7"
                : "border-gray-300"
            }`}
          >
            <LuDownload
              className={`w-6 h-6 ${
                activeTab === "reviewed"
                  ? "text-primary-7"
                  : "text-gray-400"
              }`}
            />
          </div>

          {/* Options Button */}
          <div className="relative">
            <button
              onClick={(e) => toggleMenu(1, e)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <HiOutlineDotsVertical className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dropdown Menu */}
            {openMenuId === 1 && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button className="w-full text-right px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100">
                  انتقال به
                </button>
                <button className="w-full text-right px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100">
                  اشتراک گذاری
                </button>
                <button className="w-full text-right px-4 py-3 hover:bg-gray-50 text-sm text-red-600">
                  حذف موقت
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Document Card 2 */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4 relative">
          {/* File Icon */}
          <div className="w-16 h-16 bg-primary-7 rounded-lg flex items-center justify-center flex-shrink-0">
            <HiOutlineDocumentText className="w-8 h-8 text-white" />
          </div>

          {/* Document Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              بیزنس مدل تجاری
            </h3>
            <p className="text-sm text-gray-500">حجم فایل : 9mg</p>
          </div>

          {/* Status Badge */}
          <div className="px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <span className="text-green-600 text-sm">
              بازبینی شده در تاریخ ۰۴.۰۲.۰۲
            </span>
          </div>

          {/* Download Icon */}
          <div
            className={`w-12 h-12 border-2 rounded-full flex items-center justify-center flex-shrink-0 ${
              activeTab === "reviewed"
                ? "border-primary-7"
                : "border-gray-300"
            }`}
          >
            <LuDownload
              className={`w-6 h-6 ${
                activeTab === "reviewed"
                  ? "text-primary-7"
                  : "text-gray-400"
              }`}
            />
          </div>

          {/* Options Button */}
          <div className="relative">
            <button
              onClick={(e) => toggleMenu(2, e)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <HiOutlineDotsVertical className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dropdown Menu */}
            {openMenuId === 2 && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button className="w-full text-right px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100">
                  انتقال به
                </button>
                <button className="w-full text-right px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-100">
                  اشتراک گذاری
                </button>
                <button className="w-full text-right px-4 py-3 hover:bg-gray-50 text-sm text-red-600">
                  حذف موقت
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status Message */}
      <div className="mt-6 flex items-center justify-center gap-2 text-gray-600">
        <span className="text-red-500">×</span>
        <p className="text-sm">
          سند شما در حال بررسی است و تاریخ ۰۴.۰۲.۰۲ ارسال می‌شود.
        </p>
      </div>
    </div>
  );
}
