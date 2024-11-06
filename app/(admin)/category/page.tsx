import { createCategory } from "@/app/(server)/actions/actions";
export default function Page() {
  return (
    <div className="m-4">
      <form
        action={createCategory}
        className="py-6 px-14 border border-gray-500  rounded-md"
      >
        <label htmlFor="category" className="font-bold text-2xl">
          Add Category
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter category name"
          id="category"
          name="name"
          required
          className="mt-4 mb-2 border border-gray-500 py-2 px-3 w-full"
        />
        <br />
        <button
          type="submit"
          className="bg-slate-900 text-white py-2 px-8 w-full "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
