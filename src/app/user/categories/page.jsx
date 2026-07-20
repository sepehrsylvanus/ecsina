import { Suspense } from "react";
import EditPage from "@/components/dashboard/EditPage";

export const metadata = {
  title: "دسته بندی ها | اکسینا",
  description: "مدیریت دسته بندی ها",
};

export default function Page() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <EditPage />
    </Suspense>
  );
}
