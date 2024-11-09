export async function TotalItemsSkeleton() {
  return (
    <div className="bg-slate-900 text-white text-center py-4 px-20 m-4 rounded-lg animate-pulse">
      <h1 className="text-6xl invisible">24</h1>
      <p className="invisible">Products</p>
    </div>
  );
}
