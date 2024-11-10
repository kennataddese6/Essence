import { Suspense } from "react";
import CategoryTable from "../components/category-table";
import CategoryFormUI from "../ui/category-form-ui";
import { CategoriesTableSkeleton } from "../components/category-table-skeleton";

export default function Page() {
  return (
    <div className="m-4">
      <CategoryFormUI />
      <Suspense fallback={<CategoriesTableSkeleton />}>
        <CategoryTable />
      </Suspense>
    </div>
  );
}
