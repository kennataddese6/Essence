import { getTotalCategory } from "@/app/(server)/actions/actions";

export async function TotalCategoryCard() {
  const totalCategory = await getTotalCategory();
  return (
    <div className="bg-slate-900 text-white text-center py-4 px-20 m-4 rounded-lg">
      <h1 className="text-6xl">{totalCategory}</h1>
      <p>Categories</p>
    </div>
  );
}
