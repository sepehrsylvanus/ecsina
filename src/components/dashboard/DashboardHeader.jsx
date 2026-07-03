"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiBell } from "react-icons/fi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

function DashboardHeader() {
  const [search, setSearch] = useState("");

  return (
    <header className="w-full px-4 md:px-8 py-4 md:py-6">
      <div className="flex items-center justify-between gap-4">
        {/* User Avatar - سمت چپ */}
        <Link href="/profile" className="flex-shrink-0">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary-7 cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/assets/images/User.png"
              alt="پروفایل کاربر"
              fill
              className="object-cover"
            />
          </div>
        </Link>

        {/* Search Bar + Help + Notification */}
        <div className="flex items-center gap-2 md:gap-3 flex-1 max-w-4xl">
          {/* Help */}
          <button
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border-2 border-primary-7 rounded-full flex items-center justify-center text-primary-7 hover:bg-primary-7 hover:text-white transition-colors cursor-pointer"
            aria-label="راهنما"
          >
            <HiOutlineQuestionMarkCircle className="w-6 h-6 md:w-7 md:h-7" />
          </button>

          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="flex items-center bg-white border-2 border-primary-7 rounded-full px-4 py-2 md:py-3">
              <FiSearch className="w-5 h-5 text-primary-7 flex-shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="جستوجو"
                className="flex-1 bg-transparent border-none outline-none text-black text-sm md:text-base text-left ml-3"
              />
            </div>
          </div>

          {/* Notification */}
          <button
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 border-2 border-primary-7 rounded-full flex items-center justify-center text-primary-7 hover:bg-primary-7 hover:text-white transition-colors cursor-pointer"
            aria-label="اعلان‌ها"
          >
            <FiBell className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Logo - سمت راست */}
        <div className="flex-shrink-0">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/assets/icons/Logo.svg"
              alt="اکسینا"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
