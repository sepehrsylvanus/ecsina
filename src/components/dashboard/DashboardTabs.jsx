"use client";

import { useRouter, usePathname } from "next/navigation";
import { HiOutlineDocumentText, HiOutlineArchiveBox } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { FaRegPenToSquare } from "react-icons/fa6";

const tabs = [
  { id: 1, icon: IoHome, label: "خانه", href: "/user" },
  { id: 2, icon: HiOutlineDocumentText, label: "ویرایش", href: "/user/edit" },
  { id: 3, icon: LuCopy, label: "قالب‌ها", href: "/user/templates" },
  { id: 4, icon: HiOutlineArchiveBox, label: "آرشیو", href: "/user/archive" },
  { id: 5, icon: FaRegPenToSquare, label: "یادداشت‌ها", href: "/user/notes" },
];

function DashboardTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const getActiveTabId = () => {
    const currentTab = tabs.find((tab) => tab.href === pathname);
    return currentTab ? currentTab.id : 2;
  };

  const activeTab = getActiveTabId();

  return (
    <div className="flex flex-col items-center py-4">
      {/* Icons Row */}
      <div className="flex items-center gap-6 md:gap-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => router.push(tab.href)}
              className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 ${
                isActive
                  ? "text-primary-7"
                  : "text-gray-400 hover:text-primary-7/70"
              }`}
              aria-label={tab.label}
              title={tab.label}
            >
              <Icon className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          );
        })}
      </div>

      {/* Dots indicator */}
      <div className="flex items-center gap-3 mt-3">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              activeTab === tab.id ? "bg-primary-7 w-3 h-3" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardTabs;
