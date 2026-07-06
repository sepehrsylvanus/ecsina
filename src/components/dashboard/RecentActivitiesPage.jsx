"use client";

import DashboardTabs from "./DashboardTabs";
import QuickActions from "./QuickActions";
import ActivitiesTimeline from "./ActivitiesTimeline";

function RecentActivitiesPage() {
  return (
    <div className="min-h-screen bg-secondary-1 pb-16">
      {/* تب‌های اصلی */}
      <DashboardTabs />

      {/* دسترسی سریع - در زیرصفحات home باقی می‌ماند */}
      <QuickActions activeId={2} />

      {/* Timeline فعالیت‌های اخیر */}
      <ActivitiesTimeline />
    </div>
  );
}

export default RecentActivitiesPage;
