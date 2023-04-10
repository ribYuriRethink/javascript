import express from "express";
import Joi from "joi";
const router = express.Router();

let items = [
  { id: 1, name: "Escova de dentes", price: 7.99 },
  { id: 2, name: "Xícara", price: 10 },
  { id: 3, name: "Camisa - Star Wars", price: 35.99 },
  { id: 4, name: "Barra de chocolate", price: 8.99 },
  { id: 5, name: "Barbeador", price: 89.9 },
  { id: 6, name: "Smart TV", price: 998.99 },
];

const isItemInvalid = (item, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().required(),
  });

  const { error } = schema.validate(item);
  if (error) {
    res.status(400).send(error.details[0].message);
    return true;
  }

  return false;
};

const getItemById = (id, res) => {
  const item = items.find((item) => item.id === id);
  if (!item) res.status(404).send("The item with the given id was not found!");

  return item;
};

router.get("/", (req, res) => {
  res.send(items);
});

router.post("/", (req, res) => {
  const invalidItem = isItemInvalid(req.body, res);
  if (invalidItem) return;

  const newItem = {
    id: items[items.length - 1].id + 1,
    name: req.body.name,
    price: req.body.price,
  };

  items = [...items, newItem];
  res.send(newItem);
});

router.get("/:id", (req, res) => {
  const item = getItemById(parseInt(req.params.id), res);
  if (!item) return;

  res.send({ name: item.name, price: item.price });
});

router.patch("/:id", (req, res) => {
  const item = getItemById(parseInt(req.params.id), res);
  if (!item) return;

  const invalidItem = isItemInvalid(req.body, res);
  if (invalidItem) return;

  const index = items.indexOf(item);
  items[index].name = req.body.name;
  items[index].price = req.body.price;

  res.send(item);
});

router.delete("/:id", (req, res) => {
  const item = getItemById(parseInt(req.params.id), res);
  if (!item) return;

  items = items.filter((item) => item.id !== parseInt(req.params.id));
  res.send(item);
});

export default router;
