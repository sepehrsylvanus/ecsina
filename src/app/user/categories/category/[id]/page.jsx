import { Suspense } from "react";
import EditPage from "@/components/dashboard/EditPage";

export const metadata = {
  title: "ویرایش دسته بندی | اکسینا",
  description: "ویرایش دسته بندی",
};

export default function Page({ params }) {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <EditPage />
    </Suspense>
  );
}
