"use client";

import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

// Mock data برای فعالیت‌ها
const activities = [
  {
    id: 1,
    title: "دانلود قالب ...",
    date: "شنبه 14 اردیبهشت ، 1404",
    completed: true,
  },
  {
    id: 2,
    title: "ویرایش قالب...",
    date: "شنبه 14 اردیبهشت ، 1404",
    completed: true,
  },
  {
    id: 3,
    title: "درخواست بازبینی سند",
    date: "شنبه 14 اردیبهشت ، 1404",
    completed: true,
  },
];

function ActivitiesTimeline() {
  // محاسبه موقعیت مرکز اولین و آخرین دایره بر اساس flex-1
  const itemWidth = 100 / activities.length;
  const firstCenter = itemWidth / 2;
  const lastCenter = 100 - itemWidth / 2;

  return (
    <div className="px-4 md:px-8 mt-12 md:mt-16">
      {/* Title */}
      <h2 className="text-center text-black text-lg md:text-2xl font-bold mb-10 md:mb-14">
        فعالیت های اخیر
      </h2>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto">
        {/* Circles + Connecting Line */}
        <div className="relative flex items-start justify-between">
          {/* خط اتصال بین دایره‌ها (خط چین) - از مرکز دایره اول تا مرکز دایره آخر */}
          <div
            className="absolute top-6 md:top-8 border-t-2 border-dashed border-primary-7/50 -z-0"
            style={{ left: `${firstCenter}%`, right: `${100 - lastCenter}%` }}
            aria-hidden="true"
          />

          {/* دایره تزئینی سمت چپ خط */}
          <div
            className="absolute w-2.5 h-2.5 md:w-3 md:h-3 bg-primary-7 rounded-full z-10 top-6 md:top-8 -translate-y-1/2"
            style={{ left: `${firstCenter}%` }}
            aria-hidden="true"
          />

          {/* دایره تزئینی سمت راست خط */}
          <div
            className="absolute w-2.5 h-2.5 md:w-3 md:h-3 bg-primary-7 rounded-full z-10 top-6 md:top-8 -translate-y-1/2"
            style={{ left: `${lastCenter}%` }}
            aria-hidden="true"
          />

          {/* Activity Items */}
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col items-center gap-4 flex-1 relative z-10"
            >
              {/* Circle with check */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-7 rounded-full flex items-center justify-center shadow-md">
                <FaCheck className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-black text-sm md:text-lg font-bold text-center mt-2">
                {activity.title}
              </h3>

              {/* Date */}
              <p className="text-gray-600 text-xs md:text-sm text-center">
                {activity.date}
              </p>
            </div>
          ))}
        </div>

        {/* See More Link */}
        <div className="flex items-center justify-center mt-12 md:mt-16">
          <Link
            href="/dashboard/activities/all"
            className="text-black hover:text-primary-7 text-sm md:text-base font-medium underline underline-offset-4 decoration-black hover:decoration-primary-7 transition-colors cursor-pointer"
          >
            مشاهده بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesTimeline;
