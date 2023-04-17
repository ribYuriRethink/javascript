import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";
import { Product, DatabaseProduct, makeProductOutput } from "./function&types";

const knexInstance = knex(config);

const index = async (req: Request, res: Response) => {
  try {
    const products: any[] = await knexInstance("products")
      .select("*", "products.id as id", "categories.id as categoryID")
      .join("categories", "categories.id", "=", "products.category_id");

    const structuredProducts: Product[] = makeProductOutput(products);

    res.status(200).send(structuredProducts);
  } catch (error: any) {
    res.send(error.message);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const products: any = await knexInstance("products")
      .select("*", "products.id as id", "categories.id as categoryID")
      .join("categories", "categories.id", "=", "products.category_id")
      .where("products.id", id);

    const structuredProducts: Product[] = makeProductOutput(products);

    res.status(200).send(structuredProducts[0]);
  } catch (error: any) {
    res.send(error.message);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { title, price, description, category, image, rate, count } =
      req.body;

    const findCategory: any = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    if (!findCategory[0]) throw new Error("A categoria não existe!");

    const categoryId: number = findCategory[0].id;

    const newProduct: DatabaseProduct = {
      title,
      price,
      description,
      image,
      rate,
      count,
      category_id: categoryId,
    };

    const id: number[] = await knexInstance("products").insert(newProduct);

    res.status(201).send({ id: id[0], ...newProduct });
  } catch (error: any) {
    res.send(error.message);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedProduct: any = req.body;

    if (updatedProduct.category) {
      const findCategory = await knexInstance("categories")
        .select("id")
        .where({ name: updatedProduct.category });

      if (!findCategory[0]) throw new Error("Essa categoria não existe!");

      updatedProduct.category_id = findCategory[0].id;
    }

    delete updatedProduct.category;

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

    const product: number = await knexInstance("products")
      .delete()
      .where({ id });

    if (!product) throw new Error("O produto não existe!");

    res.status(200).send({ msg: "Produto deletado!" });
  } catch (error: any) {
    res.send(error.message);
  }
};

export default { index, insert, show, update, remove };
