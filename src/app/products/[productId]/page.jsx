import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/products/Breadcrumb";
import ProductDetails from "@/components/products/ProductDetails";
import RecommendedProducts from "@/components/UI/RecommendedProducts";
import CreateComment from "@/components/products/CreateComment";
import ProductInfoSection from "@/components/products/ProductInfoSection";

export const metadata = {
  title: "صفحه محصول | اکسینا",
  description: "صفحه محصول | اکسینا",
};

export default function ProductPage({ params }) {
  return (
    <MainLayout>
      <section className="gradient-main-background min-h-screen pb-5">
        <Breadcrumb />
        <ProductDetails />
        <ProductInfoSection />
        <CreateComment />
        <RecommendedProducts />
      </section>
    </MainLayout>
  );
}
