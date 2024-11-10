import {
  deleteCategory,
  getAllCategories,
} from "@/app/(server)/actions/actions";
import { FaTrashAlt } from "react-icons/fa";

export default async function CategoryTable() {
  const categories = await getAllCategories();
  return (
    <div className="relative overflow-x-auto mt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Category name
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {category.name}
              </th>
              <td className="px-6 py-4">{category._id}</td>
              <td className="px-6 py-4">
                <form action={deleteCategory}>
                  <input
                    type="text"
                    value={category._id}
                    name="id"
                    className="hidden"
                  />
                  <button type="submit">
                    <FaTrashAlt cursor={"pointer"} fontSize={18} />
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
