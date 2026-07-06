"use client";

import DashboardTabs from "./DashboardTabs";

function EditPage() {
  return (
    <div className="min-h-screen bg-secondary-1 pb-16">
      {/* فقط تب‌های اصلی - بدون دسترسی سریع و محتوای دیگر */}
      <DashboardTabs />
    </div>
  );
}

export default EditPage;
