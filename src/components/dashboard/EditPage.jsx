"use client";

import { useSearchParams } from "next/navigation";
import CategoryTabs from "./CategoryTabs";
import DocumentsTable from "./DocumentTable";
import DocumentsList from "./DocumentsList";
import RelatedTrainings from "./RelatedTrainings";
import TrashList from "../categories/TrashList";

function EditPage() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("category") || "categories";

  return (
    <div>
      <CategoryTabs />

      {/* Show DocumentsList for "دسته بندی ها" tab */}
      {activeTab === "categories" && <DocumentsList />}

      {/* Show DocumentsTable for "دسته بندی جدید" tab */}
      {activeTab === "new" && <DocumentsTable />}

      {/* Show empty state for "اموزش های مرتبط" tab */}
      {activeTab === "related" && <RelatedTrainings />}

      {/* Show empty state for "حذف موقت" tab */}
      {activeTab === "trash" && <TrashList />}
    </div>
  );
}

export default EditPage;
