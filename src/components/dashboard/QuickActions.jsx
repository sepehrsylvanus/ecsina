"use client";

import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { LuCopy } from "react-icons/lu";
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
    href: "/dashboard/activities",
  },
  {
    id: 3,
    title: "جدیدترین قالب‌ها",
    icon: LuCopy,
    href: "/products",
  },
  {
    id: 4,
    title: "سوالات شما",
    icon: HiOutlineChatBubbleLeftRight,
    href: "/dashboard/questions",
  },
];

function QuickActions() {
  return (
    <div className="px-4 md:px-8 mt-6 md:mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.id}
              href={action.href}
              className="bg-white rounded-2xl md:rounded-3xl px-4 py-6 md:py-8 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer hover:-translate-y-1"
            >
              <span className="text-black font-bold text-sm md:text-lg">
                {action.title}
              </span>
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-7" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
