import { Request, Response, Router } from "express";
import { createProductUseCase } from "../use_case/create_product.use_case";

const productRoute = Router();

productRoute.get("/", async (req: Request, res: Response) => {
  const productList: any[] = [];

  return res.status(200).send(productList);
});

productRoute.post("/", async (req, res) => {
  const { body: newProduct } = req;

  const productResult = createProductUseCase(newProduct);
  console.log();

  productResult.then((product) => {
    return res.status(201).send(product);
  });
  
});

export { productRoute };
/* 
product
    GET  / {queryparams}
    POST /
    GET  /byId
    UPDATE /byId {req}
    DELETE /byId
*/
