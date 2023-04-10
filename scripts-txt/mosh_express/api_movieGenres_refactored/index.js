const express = require("express");
const app = express();
const genres = require("./routes/genres");

app.use(express.json());
app.use("/api/genres", genres);

app.get("/", (req, res) => {
  res.send("Requisições > /api/genres > /api/genres/1\n");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
