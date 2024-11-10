"use client";
import { useActionState, useEffect } from "react";
import {
  createCategory,
  createCategoryState,
} from "@/app/(server)/actions/actions";
import { toast } from "react-toastify";

export default function Page() {
  const initialState: createCategoryState = {
    success: false,
    errorMeessage: "",
  };
  const [state, formAction, pending] = useActionState(
    createCategory,
    initialState
  );
  useEffect(() => {
    if (state.success) {
      toast.success("Category added successfully");
    }
  }, [state]);
  return (
    <div className="m-4">
      <form
        action={formAction}
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
          className={`text-white py-2 px-8 w-full ${
            pending ? "bg-slate-950" : "bg-slate-900"
          }`}
          disabled={pending}
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
    </div>
  );
}
