import { Router } from "express";
import productsController from "../controller/productsController";
import { router as categorys } from "./categories";

const router = Router();

router.get("/", productsController.index);
router.post("/", productsController.insert);
router.get("/:id", productsController.show);
router.put("/:id", productsController.update);
router.delete("/:id", productsController.remove);

export { router };
