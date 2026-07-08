"use client";

import Header from "./Header";
import DashboardTabs from "./DashboardTabs";
import QuickActions from "./QuickActions";
import DocumentsList from "./DocumentsList";
import RelatedTrainings from "./RelatedTrainings";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-secondary-1 pb-16">
      {/* هدر */}
      <Header />

      {/* تب‌های اصلی */}
      <DashboardTabs />

      {/* دسترسی سریع (کارت‌های بالا) */}
      <QuickActions />

      {/* اسناد */}
      <DocumentsList />

      {/* آموزش های مرتبط */}
      <RelatedTrainings />
    </div>
  );
}

export default DashboardPage;
