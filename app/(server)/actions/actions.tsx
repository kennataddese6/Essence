"use server";
import Category from "../db/models/categoryModel";
import connectDB from "../db/config/db-config";

export const getAllCategories = async () => {
  await connectDB();
  const categories = await Category.find();
  return categories;
};

export const getCategoryById = async (id: string) => {
  await connectDB();
  const category = await Category.findById(id);
  return category;
};
export type createCategoryState = {
  success: boolean;
  errorMeessage: string;
};
export const createCategory = async (
  prevState: createCategoryState,
  formData: FormData
) => {
  try {
    await connectDB();
    const category = await Category.findOne({ name: formData.get("name") });
    if (category) {
      return { success: false, errorMeessage: "Category already exists" };
    }
    await Category.create({ name: formData.get("name") });
    return { success: true, errorMeessage: "Bad request" };
  } catch (error: any) {
    return { success: false, errorMeessage: error.message };
  }
};
