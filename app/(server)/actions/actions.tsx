"use server";
import Category from "../db/models/categoryModel";
import connectDB from "../db/config/db-config";
import Product from "../db/models/productModel";
import path from "path";
import fs from "fs";

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

export const deleteCategory = async (id: string) => {
  await connectDB();
  const category = await Category.findByIdAndDelete(id);
  return category;
};

export const updateCategory = async (id: string, formData: FormData) => {
  await connectDB();
  const category = await Category.findByIdAndUpdate(id, formData);
  return category;
};

export const getAllProducts = async () => {
  await connectDB();
  const products = await Product.find();
  return products;
};
export const getProductById = async (id: string) => {
  await connectDB();
  const product = await Product.findById(id);
  return product;
};

const saveImage = async (formData: FormData) => {
  const image: any = formData.get("image");
  const imagePath = path.join(process.cwd(), "storage/images", image.name);
  const buffer: any = Buffer.from(await image.arrayBuffer());

  return new Promise((resolve, reject) => {
    fs.writeFile(imagePath, buffer, (err) => {
      if (err) {
        console.error("Error writing the file:", err);
        reject(err);
      } else {
        resolve(image.name);
      }
    });
  });
};

export type createProductState = {
  success: boolean;
  errorMeessage: string;
};
export const createProduct = async (
  prevState: createProductState,
  formData: FormData
) => {
  try {
    await connectDB();
    const product = await Product.findOne({ name: formData.get("name") });
    if (product) {
      return { success: false, errorMeessage: "Product already exists" };
    }
    const imageName = await saveImage(formData);
    await Product.create({
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      rate: formData.get("rate"),
      category: formData.get("category"),
      image: imageName,
    });
    return { success: true, errorMeessage: "" };
  } catch (error: any) {
    return { success: false, errorMeessage: error.message };
  }
};
