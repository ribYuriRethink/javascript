import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Product = {
  id?: number;
  title: string;
  price: number;
  description: string;
  category_id: number;
  image: string;
  rate: number;
  count: number;
};

const index = async (req: Request, res: Response) => {
  try {
    const products = await knexInstance("products")
      .select("*", "products.id as id", "categories.id as categoryID")
      .join("categories", "categories.id", "=", "products.category_id");

    products.map((item) => {
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

    res.status(200).send(products);
  } catch (error: any) {
    res.send(error.message);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const products = await knexInstance("products")
      .select("*", "products.id as id", "categories.id as categoryID")
      .join("categories", "categories.id", "=", "products.category_id")
      .where("products.id", id);

    products.map((item) => {
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

    res.status(200).send(products[0]);
  } catch (error: any) {
    res.send(error.message);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { title, price, description, category, image, rate, count } =
      req.body;

    const findCategory = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    const categoryId = findCategory[0].id;

    const newProduct: Product = {
      title,
      price,
      description,
      image,
      rate,
      count,
      category_id: categoryId,
    };

    const id = await knexInstance("products").insert(newProduct);

    res.status(201).send({ id: id[0], ...newProduct });
  } catch (error: any) {
    res.send(error.message);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, price, description, category, image, rate, count } =
      req.body;

    const updatedData: any = {
      title,
      price,
      description,
      image,
      rate,
      count,
    };

    if (category) {
      const findCategory = await knexInstance("categories")
        .select("id")
        .where({ name: category });

      if (!findCategory[0]) throw new Error("Essa categoria não existe!");

      updatedData.category_id = findCategory[0].id;
    }

    const updatedProduct: Product = {
      ...updatedData,
    };

    const result = await knexInstance("products")
      .update(updatedProduct)
      .where({ id });

    if (!result) throw new Error("Esse produto não existe!");

    res.status(200).send({ id, ...updatedProduct });
  } catch (error: any) {
    res.send(error.message);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const product = await knexInstance("products").delete().where({ id });

    if (!product) throw new Error("O produto não existe!");

    res.status(200).send({ msg: "Produto deletado!" });
  } catch (error: any) {
    res.send(error.message);
  }
};

export default { index, insert, show, update, remove };
