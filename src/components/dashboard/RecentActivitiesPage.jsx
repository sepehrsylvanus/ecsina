"use client";

import QuickActions from "./QuickActions";
import ActivitiesTimeline from "./ActivitiesTimeline";

function RecentActivitiesPage() {
  return (
    <div>
      {/* دسترسی سریع - در زیرصفحات home باقی می‌ماند */}
      <QuickActions activeId={2} />

      {/* Timeline فعالیت‌های اخیر */}
      <ActivitiesTimeline />
    </div>
  );
}

export default RecentActivitiesPage;
