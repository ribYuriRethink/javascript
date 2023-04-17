import { Router } from "express";
import { populateTable as populateTableProducts } from "../populeDatabase/populateProducts";
import { router as products } from "./products";
import { router as categories } from "./categories";

const router = Router();

router.use("/products", categories);
router.use("/products", products);

router.use("/populateProducts", populateTableProducts);
// chamar http://localhost:3000/api/populateProducts para popular o banco

export { router };
