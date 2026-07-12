"use client";

import { IoAddCircleOutline } from "react-icons/io5";
import { LuCalendarDays, LuCopy } from "react-icons/lu";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import ActionGrid from "@/components/UI/ActionGrid";

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
    href: "/user/archive",
  },
];

function QuickActions({ activeId = null }) {
  return <ActionGrid items={actions} activeId={activeId} />;
}

export default QuickActions;
