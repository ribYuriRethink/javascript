import express from "express";
import genres from "./routes/genres.js";
const app = express();

app.use(express.json());
app.use("/api/genres", genres);

app.get("/", (req, res) => {
  res.send("Requisições > /api/genres > /api/genres/1\n");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
