"use client";

import DashboardTabs from "./DashboardTabs";
import QuickActions from "./QuickActions";
import DocumentsList from "./DocumentsList";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-secondary-1 pb-16">
      {/* تب‌های اصلی */}
      <DashboardTabs />

      {/* دسترسی سریع (کارت‌های بالا) */}
      <QuickActions />

      {/* اسناد */}
      <DocumentsList />
    </div>
  );
}

export default DashboardPage;
