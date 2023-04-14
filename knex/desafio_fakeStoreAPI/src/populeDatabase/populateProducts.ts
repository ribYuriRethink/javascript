import { getAllProducts } from "./getApiData";
import knex from "knex";
import config from "../../knexfile";

const knexInstace = knex(config);

const populateTable = async () => {
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
  console.log("Success!");
};

export { populateTable };
