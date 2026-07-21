"use client";

import { useState } from "react";
import {
  Bell,
  Search,
  HelpCircle,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/auth/login";

function Header() {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logoutUser();
    router.push("/auth/login");
  };

  return (
    <header className="w-full py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/icons/Logo.svg"
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

        {/* Profile Picture with Avatar Fallback and Dropdown */}
        <div className="relative flex items-center">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center">
              {!imageError ? (
                <Image
                  src="/assets/profile.jpg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-primary-7 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowDropdown(false)}
              />
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden">
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    handleLogout();
                  }}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>خروج</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
