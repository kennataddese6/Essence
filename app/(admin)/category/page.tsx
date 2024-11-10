import CategoryTable from "../components/category-table";
import CategoryFormUI from "../ui/category-form-ui";

export default function Page() {
  return (
    <div className="m-4">
      <CategoryFormUI />
      <CategoryTable />
    </div>
  );
}
