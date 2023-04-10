import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Shop items API");
});

export default router;
