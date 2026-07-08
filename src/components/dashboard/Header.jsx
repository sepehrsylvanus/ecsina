"use client";

import { Bell, Search, HelpCircle } from "lucide-react";
import Image from "next/image";

function Header() {
  return (
    <header className="w-full py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Center Section - Notification, Search, Help */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="p-2 rounded-full border-2 border-primary-7 text-primary-7 hover:bg-primary-7 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="جستجو"
                className="w-full pr-10 pl-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-primary-7 text-sm"
                dir="rtl"
              />
            </div>

            {/* Help Icon */}
            <button className="p-2 rounded-full border-2 border-primary-7 text-primary-7 hover:bg-primary-7 hover:text-white transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
            <Image
              src="/assets/profile.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
