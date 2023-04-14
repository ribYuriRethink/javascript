const fetchApi = async (url) => {
  const result = await fetch(url).then((request) => request.json());
  return result;
};

const getAllProducts = async (endpoint) => {
  if (endpoint !== "products") throw new Error("Endpoit must be 'products'");
  const url = "https://fakestoreapi.com/" + endpoint;
  const result = await fetchApi(url);
  return result;
};

const getProductById = async (id) => {
  const products = await getAllProducts("products");
  if (!id || id < 0 || id > products.length) throw new Error("Invalid ID");
  const url = "https://fakestoreapi.com/products/" + id;
  const result = await fetchApi(url);
  return result;
};

const getAllProductCategories = async (endpoint) => {
  if (endpoint !== "categories")
    throw new Error("Endpoit must be 'categories'");
  const url = "https://fakestoreapi.com/products/" + endpoint;
  const result = await fetchApi(url);
  return result;
};

const getProductsByCategory = async (category) => {
  const categories = await getAllProductCategories("categories");
  if (!category || !categories.includes(category))
    throw new Error("Invalid category");
  const url = "https://fakestoreapi.com/products/category/" + category;
  const result = await fetchApi(url);
  return result;
};

const getProductsOverRate = async (rate) => {
  if (!rate || rate <= 0 || rate > 4) throw new Error("Invalid rate");
  const products = await getAllProducts("products");
  const filteredProducts = products.filter((item) => item.rating.rate > rate);
  return filteredProducts;
};

const applieReduceOnProducts = async (endpoint, callback, initializer) => {
  const products = await getAllProducts(endpoint);
  let result;
  if (initializer) {
    result = products.reduce(callback, initializer);
  } else {
    result = products.reduce(callback);
  }
  return result;
};

const getMostVotedProduct = async (endpoint) => {
  const callback = (acc, product) =>
    acc.rating.count < product.rating.count ? product : acc;
  const result = await applieReduceOnProducts(endpoint, callback);
  return result;
};

const getAveragePriceOfProducts = async (endpoint) => {
  const callback = (acc, product) => {
    acc.sum += product.price;
    acc.length++;
    return acc;
  };
  const result = await applieReduceOnProducts(endpoint, callback, {
    sum: 0,
    length: 0,
  });
  const average = result.sum / result.length;
  return average;
};

const getMoreExpensiveProduct = async (endpoint) => {
  const callback = (acc, product) =>
    acc.price < product.price ? product : acc;
  const result = await applieReduceOnProducts(endpoint, callback);
  return result;
};

const getCheapestProduct = async (endpoint) => {
  const callback = (acc, product) =>
    acc.price > product.price ? product : acc;
  const result = await applieReduceOnProducts(endpoint, callback);
  return result;
};

const showInConsole = async (callback) => console.log(await callback);

showInConsole(getAllProducts("products"));
// showInConsole(getProductById(1));
// showInConsole(getAllProductCategories("categories"));
// showInConsole(getProductsByCategory("jewelery"));
// showInConsole(getProductsOverRate(4));
// showInConsole(getMostVotedProduct("products"));
// showInConsole(getAveragePriceOfProducts("products"));
// showInConsole(getMoreExpensiveProduct("products"));
// showInConsole(getCheapestProduct("products"));

export {
  fetchApi,
  getAllProducts,
  getProductById,
  getAllProductCategories,
  getProductsByCategory,
  getProductsOverRate,
  getMostVotedProduct,
  getAveragePriceOfProducts,
  getMoreExpensiveProduct,
  getCheapestProduct,
};
