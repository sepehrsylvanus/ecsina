"use client";

import DashboardTabs from "./DashboardTabs";
import CategoryTabs from "./CategoryTabs";
import DocumentsTable from "./DocumentTable";
function EditPage() {
  return (
    <div className="min-h-screen bg-secondary-1 pb-16">
      <DashboardTabs />
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <CategoryTabs />
        <DocumentsTable />
      </div>
    </div>
  );
}

export default EditPage;
