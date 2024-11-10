import { getAllCategories } from "@/app/(server)/actions/actions";
import ProductsFormUI from "../ui/products-form-ui";

export async function ProductsForm() {
  const categories = await getAllCategories();
  return <ProductsFormUI categories={categories} />;
}
