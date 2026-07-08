"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  HiOutlineFolderPlus,
  HiOutlineFolder,
  HiOutlineClipboardDocumentList,
  HiOutlineTrash,
} from "react-icons/hi2";
import ActionGrid from "@/components/UI/ActionGrid";

const tabs = [
  {
    id: "new",
    label: "دسته بندی جدید",
    icon: HiOutlineFolderPlus,
    disabled: true,
  },
  { id: "categories", label: "دسته بندی ها", icon: HiOutlineFolder },
  {
    id: "related",
    label: "اموزش های مرتبط",
    icon: HiOutlineClipboardDocumentList,
  },
  { id: "trash", label: "حذف موقت", icon: HiOutlineTrash },
];

function CategoryTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("category") || "categories";

  const handleTabClick = (tab) => {
    router.push(`${pathname}?category=${tab.id}`);
  };

  return (
    <div className="px-4 md:px-8 mt-6 md:mt-10">
      <ActionGrid
        items={tabs}
        activeId={activeTab}
        onItemClick={handleTabClick}
      />
    </div>
  );
}

export default CategoryTabs;
