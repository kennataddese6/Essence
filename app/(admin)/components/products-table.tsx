import { getAllProducts } from "@/app/(server)/actions/actions";
import Image from "next/image";
export async function ProductsTable() {
  const products = await getAllProducts();
  return (
    <div className="relative overflow-x-auto mt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {product.name}
              </th>
              <td className="px-6 py-4">{product.description}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">ETB {product.price}</td>
              <td className="px-6 py-4">
                <Image
                  src={`http://localhost:3000/image/${product._id}`}
                  alt="product image"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
