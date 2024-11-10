import { Suspense } from "react";
import { ProductsTable } from "../components/products-table";
import { ProductsForm } from "../components/products-form";
import ProductsFormSkeleton from "../components/product-form-skeleton";
import { ProductsTableSkeleton } from "../components/Product-table-skeleton";
export default function Page() {
  return (
    <div className="m-4">
      <Suspense fallback={<ProductsFormSkeleton />}>
        <ProductsForm />
      </Suspense>
      <Suspense fallback={<ProductsTableSkeleton />}>
        <ProductsTable />
      </Suspense>
    </div>
  );
}
