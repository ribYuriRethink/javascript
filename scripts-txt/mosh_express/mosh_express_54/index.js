const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const genres = [
  { id: 1, name: "Ação" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Suspense" },
];

function getGenreById(id) {
  const genre = genres.find((elem) => elem.id === parseInt(id));
  return genre;
}

function validateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(genre);
}

app.get("/", (req, res) => {
  res.send("Requisições > /api/genres > /api/genres/1\n");
});

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.get("/api/genres/:id", (req, res) => {
  const genre = getGenreById(req.params.id);
  if (!genre)
    return res.status(404).send("The genre with the given id was not found");
  res.send(genre);
});

app.post("/api/genres", (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newGenre = {
    id: genres[genres.length - 1].id + 1,
    name: req.body.name,
  };

  genres.push(newGenre);
  res.send(newGenre);
});

app.put("/api/genres/:id", (req, res) => {
  const genre = getGenreById(req.params.id);
  if (!genre)
    return res.status(404).send("The genre with the given id was not found");

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

app.delete("/api/genres/:id", (req, res) => {
  const genre = getGenreById(req.params.id);
  if (!genre)
    return res.status(404).send("The genre with the given id was not found");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
