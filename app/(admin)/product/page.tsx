import { Suspense } from "react";
import { ProductsTable } from "../components/products-table";
import { ProductsForm } from "../components/products-form";
export default function Page() {
  return (
    <div className="m-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsForm />
      </Suspense>
      <ProductsTable />
    </div>
  );
}
