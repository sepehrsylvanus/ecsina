import React from "react";
import Header from "@/components/dashboard/Header";
import DashboardTabs from "@/components/dashboard/DashboardTabs";

function UserLayout({ children }) {
  return (
    <body lang="fa" dir="rtl">
      <div className="min-h-screen bg-secondary-1 pb-16">
        {/* هدر */}
        <Header />

        {/* تب‌های اصلی */}
        <DashboardTabs />

        {/* محتوای صفحه */}
        {children}
      </div>
    </body>
  );
}

export default UserLayout;
