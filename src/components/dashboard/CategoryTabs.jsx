// components/dashboard/CategoryTabs.jsx
"use client";

import { useState } from "react";
import { Trash2, ClipboardList, Folder, FolderPlus } from "lucide-react";

const tabs = [
  { id: "new", label: "دسته بندی جدید", icon: FolderPlus },
  { id: "categories", label: "دسته بندی ها", icon: Folder },
  { id: "related", label: "اموزش های مرتبط", icon: ClipboardList },
  { id: "trash", label: "حذف موقت", icon: Trash2 },
];

function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("categories");

  return (
    <div className="flex items-center justify-between gap-4 mb-8" dir="rtl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all shadow-sm ${
              isActive
                ? "bg-white border-2 border-gray-800 text-gray-900 font-bold"
                : "bg-white/60 border border-gray-200 text-gray-700 hover:bg-white"
            }`}
          >
            <span className="text-sm whitespace-nowrap">{tab.label}</span>
            <Icon className="w-4 h-4" />
          </button>
        );
      })}
    </div>
  );
}

export default CategoryTabs;
