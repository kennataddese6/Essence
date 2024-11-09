"use client";
import { useActionState, useEffect } from "react";
import {
  createProduct,
  createProductState,
} from "@/app/(server)/actions/actions";
import { toast } from "react-toastify";
export default function ProductsFormUI() {
  const initialState: createProductState = {
    success: false,
    errorMeessage: "",
  };
  const [state, formAction, pending] = useActionState(
    createProduct,
    initialState
  );
  useEffect(() => {
    if (state.success) {
      toast.success("Product created successfully");
    }
  }, [state]);
  return (
    <form
      action={formAction}
      className="py-6 px-14 border border-gray-500 rounded-md"
    >
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
      />
      <br />
      <input
        type="text"
        name="description"
        placeholder="Enter description"
        id="category"
        required
        className="mb-2 border border-gray-200 py-2 px-3 w-full"
      />
      <br />
      <input
        type="number"
        placeholder="Enter price"
        name="price"
        id="category"
        required
        className="mb-2 border border-gray-200 py-2 px-3 w-full"
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
      />
      <br />
      <select
        id="category"
        name="category"
        required
        className="mt-4 mb-2 border border-gray-200 py-2 px-3 w-full text-grey-200"
      >
        <option value=""> Select Category</option>
        <option value="1">Category 1</option>
        <option value="2">Category 2</option>
        <option value="3">Category 3</option>
        <option value="4">Category 4</option>
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
      />
      <br />
      <button
        type="submit"
        className="bg-slate-900 text-white py-2 px-8 w-52 block ml-auto"
      >
        {pending ? (
          <div className="border-t-2 border-t-slate-100 animate-spin h-5 w-5 mx-auto rounded-full"></div>
        ) : (
          "Submit"
        )}
      </button>
      {state.errorMeessage && (
        <p className="text-red-500 text-sm text-center mt-2">
          {state.errorMeessage}
        </p>
      )}
    </form>
  );
}
