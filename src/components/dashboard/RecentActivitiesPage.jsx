"use client";

import DashboardTabs from "./DashboardTabs";
import QuickActions from "./QuickActions";
import ActivitiesTimeline from "./ActivitiesTimeline";

function RecentActivitiesPage() {
  return (
    <div className="min-h-screen bg-secondary-1 pb-16">
      {/* تب‌های اصلی */}
      <DashboardTabs activeTabId={2} />

      {/* دسترسی سریع - با تب فعال "فعالیت‌های اخیر" */}
      <QuickActions activeId={2} />

      {/* Timeline فعالیت‌های اخیر */}
      <ActivitiesTimeline />
    </div>
  );
}

export default RecentActivitiesPage;
