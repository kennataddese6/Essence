export default function Page() {
  return (
    <div className="m-4">
      <form
        action=""
        className="py-6 px-14 border border-gray-500 text-center rounded-md"
      >
        <label htmlFor="category" className="font-bold text-2xl">
          Add Category
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter category name"
          id="category"
          required
          className="mt-4 mb-2 border border-gray-500 py-2 px-3 w-52"
        />
        <br />
        <button
          type="submit"
          className="bg-slate-900 text-white py-2 px-8 w-52"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
