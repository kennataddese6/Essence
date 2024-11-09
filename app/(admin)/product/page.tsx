import ProductsFormUI from "../components/products-form-ui";
import { ProductsTable } from "../components/products-table";
export default function Page() {
  return (
    <div className="m-4">
      <ProductsFormUI />
      <ProductsTable />
    </div>
  );
}
