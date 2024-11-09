import { getTotalProduct } from "@/app/(server)/actions/actions";

export async function TotalProductCard() {
  const totalProduct = await getTotalProduct();
  return (
    <div className="bg-slate-900 text-white text-center py-4 px-20 m-4 rounded-lg">
      <h1 className="text-6xl">{totalProduct}</h1>
      <p>Products</p>
    </div>
  );
}
