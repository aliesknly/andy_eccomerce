import { Schema, model } from "mongoose";
import { ProductEntity } from "./product.entity";

const ProductSchema = new Schema<ProductEntity>({
  name: String,
  price: Number,
  description: String,
  available: Boolean,
  total: Number,
});

export const ProductModel = model("Product", ProductSchema, "product");
