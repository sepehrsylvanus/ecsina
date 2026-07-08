"use client";

import { useSearchParams } from "next/navigation";
import DashboardTabs from "./DashboardTabs";
import CategoryTabs from "./CategoryTabs";
import DocumentsTable from "./DocumentTable";
import DocumentsList from "./DocumentsList";
import RelatedTrainings from "./RelatedTrainings";

function EditPage() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("category") || "categories";

  return (
    <div className="min-h-screen bg-secondary-1 pb-16">
      <DashboardTabs />
      <CategoryTabs />

      {/* Show DocumentsList for "دسته بندی ها" tab */}
      {activeTab === "categories" && <DocumentsList />}

      {/* Show DocumentsTable for "دسته بندی جدید" tab */}
      {activeTab === "new" && <DocumentsTable />}

      {/* Show empty state for "اموزش های مرتبط" tab */}
      {activeTab === "related" && <RelatedTrainings />}
    </div>
  );
}

export default EditPage;
