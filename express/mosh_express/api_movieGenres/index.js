import Joi from "joi";
import express from "express";
const app = express();

app.use(express.json());

const genres = [
  { id: 1, name: "Ação" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Suspense" },
];

function getAndValidateGenreById(id, res) {
  const genre = genres.find((elem) => elem.id === parseInt(id));
  if (!genre) {
    res.status(404).send("The genre with the given id was not found");
  } else {
    return genre;
  }
}

function validateGenre(genre, res) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(genre);
  if (error) {
    res.status(400).send(error.details[0].message);
    return true;
  } else {
    return false;
  }
}

app.get("/", (req, res) => {
  res.send("Requisições > /api/genres > /api/genres/1\n");
});

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.get("/api/genres/:id", (req, res) => {
  const genre = getAndValidateGenreById(req.params.id, res);
  if (!genre) return;
  res.send(genre);
});

app.post("/api/genres", (req, res) => {
  const invalidGenre = validateGenre(req.body, res);
  if (invalidGenre) return;

  const newGenre = {
    id: genres[genres.length - 1].id + 1,
    name: req.body.name,
  };

  genres.push(newGenre);
  res.send(newGenre);
});

app.put("/api/genres/:id", (req, res) => {
  const genre = getAndValidateGenreById(req.params.id, res);
  if (!genre) return;

  const invalidGenre = validateGenre(req.body, res);
  if (invalidGenre) return;

  genre.name = req.body.name;
  res.send(genre);
});

app.delete("/api/genres/:id", (req, res) => {
  const genre = getAndValidateGenreById(req.params.id, res);
  if (!genre) return;

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
