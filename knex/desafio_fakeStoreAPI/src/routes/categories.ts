import { Router } from "express";
import categorysController from "../controller/categorysController";

const router = Router();

router.get("/categories", categorysController.index);
router.post("/categories", categorysController.insert);
router.get("/category/:name", categorysController.show);
router.put("/category/:id", categorysController.update);
router.delete("/category/:id", categorysController.remove);

export { router };
