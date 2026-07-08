"use client";

import { useSearchParams } from "next/navigation";
import DashboardTabs from "./DashboardTabs";
import CategoryTabs from "./CategoryTabs";
import DocumentsTable from "./DocumentTable";
import DocumentsList from "./DocumentsList";

function EditPage() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("category") || "categories";

  return (
    <div className="min-h-screen bg-secondary-1 pb-16">
      <DashboardTabs />
      <CategoryTabs />

      {/* Show DocumentsList for "دسته بندی ها" tab (id: "new") */}
      {/* Show DocumentsTable for "دسته بندی جدید" tab (id: "categories") */}
      {activeTab === "categories" ? <DocumentsList /> : <DocumentsTable />}
    </div>
  );
}

export default EditPage;
