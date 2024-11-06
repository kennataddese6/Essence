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
export const createCategory = async (formData: FormData) => {
  if (!formData.get("name")) {
    return "Please enter a name";
  }
  await connectDB();
  await Category.create({ name: formData.get("name") });
  return true;
};
