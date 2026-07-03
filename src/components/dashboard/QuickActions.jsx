"use client";

import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuCalendarDays, LuCopy } from "react-icons/lu";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const actions = [
  {
    id: 1,
    title: "دانلود قالب جدید",
    icon: IoAddCircleOutline,
    href: "/products",
  },
  {
    id: 2,
    title: "فعالیت‌های اخیر",
    icon: LuCalendarDays,
    href: "/user/activities",
  },
  {
    id: 3,
    title: "جدید ترین قالب ها",
    icon: LuCopy,
    href: "/products",
  },
  {
    id: 4,
    title: "سوالات شما",
    icon: HiOutlineChatBubbleLeftRight,
    href: "/user/questions",
  },
];

function QuickActions({ activeId = null }) {
  return (
    <div className="px-4 md:px-8 mt-6 md:mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {actions.map((action) => {
          const Icon = action.icon;
          const isActive = activeId === action.id;

          return (
            <Link
              key={action.id}
              href={action.href}
              className={`rounded-2xl md:rounded-3xl px-4 py-6 md:py-8 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer hover:-translate-y-1 ${
                isActive ? "bg-primary-0 border-2 border-primary-7" : "bg-white"
              }`}
            >
              <span
                className={`font-bold text-sm md:text-lg ${
                  isActive ? "text-primary-7" : "text-black"
                }`}
              >
                {action.title}
              </span>
              <Icon
                className={`w-6 h-6 md:w-7 md:h-7 ${
                  isActive ? "text-primary-7" : "text-primary-7"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
