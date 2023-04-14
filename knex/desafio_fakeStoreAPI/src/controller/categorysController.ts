import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Category = {
  id?: number;
  name: string;
};

const index = async (req: Request, res: Response) => {
  try {
    const categories = await knexInstance("categories").select("name");

    const allCategories = categories.map((item) => item.name);

    res.status(200).send(allCategories);
  } catch (error: any) {
    res.send(error.message);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const name = req.params.name;

    const productsByCategorie = await knexInstance("products")
      .select("*", "products.id as id", "categories.id as categoryID")
      .join("categories", "categories.id", "=", "products.category_id")
      .where("categories.name", name);

    if (!productsByCategorie[0]) {
      return res.status(404).send([]);
    }

    productsByCategorie.map((item) => {
      item.category = item.name;
      delete item.category_id;
      delete item.categoryID;
      delete item.name;

      item.rating = {
        rate: item.rate,
        count: item.count,
      };

      delete item.rate;
      delete item.count;
    });

    res.status(200).send(productsByCategorie);
  } catch (error: any) {
    res.send(error.message);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newCategory = { name };

    const id = await knexInstance("categories").insert(newCategory);

    res.status(201).send({ id: id[0], name });
  } catch (error: any) {
    res.send(error.message);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newName = req.body.name;

    const result = await knexInstance("categories")
      .update({ name: newName })
      .where({ id });

    console.log(result);
    if (!result) throw new Error("Essa Categoria não existe");

    res.status(200).send({ id, name: newName });
  } catch (error: any) {
    res.send(error.message);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const category = await knexInstance("categories").delete().where({ id });

    if (!category) throw new Error("Essa categoria não existe!");

    res.status(200).send({ msg: "Categoria deletada!" });
  } catch (error: any) {
    res.send(error.message);
  }
};

export default { index, show, insert, update, remove };
