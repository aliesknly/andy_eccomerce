import { Request, Response, Router } from "express";
import { productRoute } from "../modules/product";

const routes = Router();

routes.use("/product", productRoute);

export { routes };
