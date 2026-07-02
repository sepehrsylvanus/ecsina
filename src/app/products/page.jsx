import MainLayout from "@/components/layout/MainLayout";
import AllCategories from "@/components/products/AllCategories";
import SearchInput from "@/components/UI/SearchInput";
import AllProducts from "@/components/products/AllProducts";
import GuideModal from "./GuideModal";

export default function ProductsPage() {
  return (
    <MainLayout>
      <section className="gradient-main-background mt-4 md:mt-8">
        <div className="container mx-auto px-4 pb-16 pt-8 md:pb-[110px]">
          {/* Header - Search + Guide button */}
          <div className="flex items-center justify-between gap-4 md:gap-6">
            <SearchInput placeholder={"جست و جو"} />
            <GuideModal />
          </div>

          {/* Categories */}
          <div className="mt-16 md:mt-24">
            <h3 className="text-black text-xl md:text-3xl font-bold flex items-center justify-center">
              دسته‌بندی محصولات
            </h3>
            <AllCategories />
          </div>

          {/* Products */}
          <div className="mt-16 md:mt-24">
            <h3 className="text-black text-xl md:text-3xl font-bold flex items-center justify-center">
              جدیدترین قالب‌ها
            </h3>
            <AllProducts />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
