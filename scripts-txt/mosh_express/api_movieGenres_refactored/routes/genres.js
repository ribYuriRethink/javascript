const express = require("express");
const router = express.Router();
const Joi = require("joi");

const genres = [
  { id: 1, name: "Ação" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Suspense" },
];

function getAndValidateGenreById(id, res) {
  const genre = genres.find((elem) => elem.id === parseInt(id));
  if (!genre) res.status(404).send("The genre with the given id was not found");

  return genre;
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

router.get("/", (req, res) => {
  res.send(genres);
});

router.get("/:id", (req, res) => {
  const genre = getAndValidateGenreById(req.params.id, res);
  if (!genre) return;
  res.send(genre);
});

router.post("/", (req, res) => {
  const invalidGenre = validateGenre(req.body, res);
  if (invalidGenre) return;

  const newGenre = {
    id: genres[genres.length - 1].id + 1,
    name: req.body.name,
  };

  genres.push(newGenre);
  res.send(newGenre);
});

router.put("/:id", (req, res) => {
  const genre = getAndValidateGenreById(req.params.id, res);
  if (!genre) return;

  const invalidGenre = validateGenre(req.body, res);
  if (invalidGenre) return;

  genre.name = req.body.name;
  res.send(genre);
});

router.delete("/:id", (req, res) => {
  const genre = getAndValidateGenreById(req.params.id, res);
  if (!genre) return;

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

module.exports = router;
