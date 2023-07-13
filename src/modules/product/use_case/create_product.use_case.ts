import { CreateProductDto, ProductModel, ProductEntity } from "../domain";

export async function createProductUseCase(newProduct: CreateProductDto) {
  const product = new ProductModel(newProduct);
  return await product.save();
}
