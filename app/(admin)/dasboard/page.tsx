import { TotalCategoryCard } from "@/app/(admin)/components/total-category-card";
import { TotalProductCard } from "@/app/(admin)/components/total-product-card";
export default function Page() {
  return (
    <div className="flex flex-wrap">
      <TotalProductCard />
      <TotalCategoryCard />
    </div>
  );
}
