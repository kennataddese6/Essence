export default function ProductsFormSkeleton() {
  return (
    <form className="py-6 px-14 border border-gray-500 rounded-md">
      <label htmlFor="category" className="font-bold text-2xl">
        Add Product
      </label>
      <br />
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        id="category"
        required
        className="mt-4 mb-2 border border-gray-200 py-2 px-3  w-full"
        disabled
      />
      <br />
      <input
        type="text"
        name="description"
        placeholder="Enter description"
        id="category"
        required
        className="mb-2 border border-gray-200 py-2 px-3 w-full"
        disabled
      />
      <br />
      <input
        type="number"
        placeholder="Enter price"
        name="price"
        id="category"
        required
        className="mb-2 border border-gray-200 py-2 px-3 w-full"
        disabled
      />
      <br />
      <input
        type="number"
        name="rate"
        min={1}
        max={5}
        placeholder="Enter rate"
        id="category"
        required
        className="mb-2 border border-gray-200 py-2 px-3 w-full"
        disabled
      />
      <br />
      <select
        id="category"
        name="category"
        required
        className="mt-4 mb-2 border border-gray-200 py-2 px-3 w-full text-grey-200 bg-slate-400 animate-pulse"
        disabled
      >
        <option value=""> Select Category</option>
      </select>
      <br />
      <input
        type="file"
        name="image"
        min={1}
        max={5}
        placeholder="Enter rate"
        id="category"
        required
        className="mb-2 border border-gray-200 py-2 px-3 w-full"
        disabled
      />
      <br />
      <button
        type="submit"
        className="bg-slate-900 text-white py-2 px-8 w-52 block ml-auto"
        disabled
      >
        Submit
      </button>
    </form>
  );
}
