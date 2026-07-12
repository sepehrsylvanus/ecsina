"use client";

import QuickActions from "./QuickActions";
import DocumentCards from "./DocumentCards";

function DashboardPage() {
  return (
    <div>
      {/* دسترسی سریع (کارت‌های بالا) */}
      <QuickActions />

      {/* اسناد */}
      <DocumentCards />
    </div>
  );
}

export default DashboardPage;
