import { ProductInterface } from "./products.interface";

export class ProductEntity implements ProductInterface {
  constructor(
    name: string,
    price: number,
    description: string,
    available: boolean,
    total: number
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.available = available;
    this.total = total;
  }

  name: string;
  price: number;
  description: string;
  available: boolean;
  total: number;
}
