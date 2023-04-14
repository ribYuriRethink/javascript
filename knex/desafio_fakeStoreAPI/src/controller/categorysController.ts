import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";
import { Category, Product, makeProductOutput } from "./function&types";

const knexInstance = knex(config);

const index = async (req: Request, res: Response) => {
  try {
    const categories: Category[] = await knexInstance("categories").select(
      "name"
    );

    const allCategories: string[] = categories.map((item) => item.name);

    res.status(200).send(allCategories);
  } catch (error: any) {
    res.send(error.message);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const name: string = req.params.name;

    const productsByCategorie: any[] = await knexInstance("products")
      .select("*", "products.id as id", "categories.id as categoryID")
      .join("categories", "categories.id", "=", "products.category_id")
      .where("categories.name", name);

    if (!productsByCategorie[0]) {
      return res.status(404).send([]);
    }

    const structuredProducts: Product[] =
      makeProductOutput(productsByCategorie);

    res.status(200).send(structuredProducts);
  } catch (error: any) {
    res.send(error.message);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newCategory = { name };

    const id: number[] = await knexInstance("categories").insert(newCategory);

    res.status(201).send({ id: id[0], name });
  } catch (error: any) {
    res.send(error.message);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newName: string = req.body.name;

    const result: number = await knexInstance("categories")
      .update({ name: newName })
      .where({ id });

    if (!result) throw new Error("Essa Categoria não existe");

    res.status(200).send({ id, name: newName });
  } catch (error: any) {
    res.send(error.message);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const category: number = await knexInstance("categories")
      .delete()
      .where({ id });

    if (!category) throw new Error("Essa categoria não existe!");

    res.status(200).send({ msg: "Categoria deletada!" });
  } catch (error: any) {
    res.send(error.message);
  }
};

export default { index, show, insert, update, remove };
