import { TotalCategoryCard } from "@/app/(admin)/components/total-category-card";
export default function Page() {
  return (
    <div className="flex flex-wrap">
      <div className="bg-slate-900 text-white text-center py-4 px-20 m-4 rounded-lg">
        <h1 className="text-6xl">24</h1>
        <p>Products</p>
      </div>
      <TotalCategoryCard />
    </div>
  );
}
