import { Router } from "express";
import { populateTable } from "../populeDatabase/populateProducts";
import { router as products } from "./products";
import { router as categories } from "./categories";

const router = Router();

router.use("/products", categories);
router.use("/products", products);

// router.use("/populateProducts", populateTable); // rode uma vez para popular o banco

export { router };
