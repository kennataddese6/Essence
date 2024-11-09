import { Suspense } from "react";
import { TotalItemsSkeleton } from "@/app/(admin)/components/total-items-skeleton";
import { TotalCategoryCard } from "@/app/(admin)/components/total-category-card";
import { TotalProductCard } from "@/app/(admin)/components/total-product-card";
export default function Page() {
  return (
    <div className="flex flex-wrap">
      <Suspense fallback={<TotalItemsSkeleton />}>
        <TotalProductCard />
      </Suspense>
      <Suspense fallback={<TotalItemsSkeleton />}>
        <TotalCategoryCard />
      </Suspense>
    </div>
  );
}
