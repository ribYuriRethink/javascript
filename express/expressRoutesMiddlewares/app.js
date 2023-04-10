import express from "express";
import home from "./routes/home.js";
import items from "./routes/items.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", home);
app.use("/api/items", items);

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
);
