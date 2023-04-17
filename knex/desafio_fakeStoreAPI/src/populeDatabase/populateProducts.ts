import { getAllProducts } from "./getApiData";
import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstace = knex(config);

const populateTable = async (_req: Request, res: Response) => {
  const allProductsData = await knexInstace("products").select("*");
  if (allProductsData.length != 0) {
    return res.send("O banco já possui dados!");
  }

  const resultApi = await getAllProducts("products");

  const allCategorys = await knexInstace("categories").select("*");

  const categorys: any = allCategorys.reduce((acc, curr) => {
    acc[curr.name] = curr.id;
    return acc;
  }, {});

  resultApi.map((item: any) => {
    const { rate, count } = item.rating;
    item.rate = rate;
    item.count = count;
    delete item.rating;

    item.category_id = categorys[item.category];
    delete item.category;
  });

  resultApi.map(async (item: any) => {
    await knexInstace("products").insert(item);
  });

  console.log("Populate Database success!");
  return res.send("Banco povoado com sucesso!");
};

export { populateTable };
