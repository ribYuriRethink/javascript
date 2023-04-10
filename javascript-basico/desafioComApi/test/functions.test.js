import {
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
} from "../functions";

describe("fetching API", () => {
  it("should return a json file of the requisited api", async () => {
    const result = await fetchApi("https://fakestoreapi.com/products/1");
    expect(result).toMatchObject({ id: expect.any(Number) });
  });

  it("should return an error when passed a wrong url", async () => {
    try {
      await fetchApi("https://fakestoreapi.com/products/0");
    } catch (erro) {
      expect(erro.message).toBe("Unexpected end of JSON input");
    }
  });
});

describe("getAllProducts", () => {
  it("should return all the products", async () => {
    const result = await getAllProducts("products");
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: expect.any(Number) }),
      ])
    );
  });

  it("should return an array with 20 elements", async () => {
    const result = await getAllProducts("products");
    expect(result.length).toEqual(20);
  });

  it("should return an error if the endpoint isn't right", async () => {
    try {
      const result = await getAllProducts("product");
      expect(typeof result).toBe("object");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'products'");
    }
  });
});

describe("getProductById", () => {
  it("should return the product of the given id", async () => {
    const param = 1;
    expect(typeof param).toBe("number");
    const result = await getProductById(param);
    expect(result).toMatchObject({ id: expect.any(Number) });
  });

  it("should return an error if the ID is invalid", async () => {
    try {
      await getProductById(21);
    } catch (error) {
      expect(error.message).toBe("Invalid ID");
    }
  });
});

describe("getAllProductCategories", () => {
  it("should return an array with all categories", async () => {
    const result = await getAllProductCategories("categories");
    expect(result).toEqual(
      expect.arrayContaining([
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
      ])
    );
  });

  it("should return an error if endpoint is wrong", async () => {
    try {
      await getAllProductCategories("wrong");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'categories'");
    }
  });
});

describe("getProductsByCategory", () => {
  it("should return all items of the given category", async () => {
    const result = await getProductsByCategory("jewelery");
    expect(result.length).toBe(4);
  });

  it("should return an error it the given category is invalid", async () => {
    try {
      await getProductsByCategory("wrong");
    } catch (error) {
      expect(error.message).toBe("Invalid category");
    }
  });
});

describe("getProductsOverRate", () => {
  it("should return all products over the given rate", async () => {
    const result = await getProductsOverRate(4);
    expect(result.length).toBe(7);
  });

  it("should return an error if the given rate is invalid", async () => {
    try {
      await getProductsOverRate(0);
    } catch (error) {
      expect(error.message).toBe("Invalid rate");
    }
  });
});

describe("getMostVotedProduct", () => {
  it("should return the product with most counts", async () => {
    const result = await getMostVotedProduct("products");
    expect(result.rating.count).toBe(679);
  });

  it("should return an error if the endpoint is wrong", async () => {
    try {
      await getMostVotedProduct("product");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'products'");
    }
  });
});

describe("getAveragePriceOfProducts", () => {
  it("should return the average price of all products", async () => {
    const result = Math.round(await getAveragePriceOfProducts("products"));
    expect(result).toEqual(162);
  });

  it("should return an error if the endpoint is wrong", async () => {
    try {
      await getAveragePriceOfProducts("product");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'products'");
    }
  });
});

describe("getMoreExpensiveProduct", () => {
  it("should return the more expensive of all products", async () => {
    const result = await getMoreExpensiveProduct("products");
    expect(result.price).toEqual(999.99);
  });

  it("should return an error if the endpoint is wrong", async () => {
    try {
      await getMoreExpensiveProduct("product");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'products'");
    }
  });
});

describe("getCheapestProduct", () => {
  it("should return the cheapest of all products", async () => {
    const result = await getCheapestProduct("products");
    expect(result.price).toEqual(7.95);
  });

  it("should return an error if the endpoint is wrong", async () => {
    try {
      await getCheapestProduct("product");
    } catch (error) {
      expect(error.message).toBe("Endpoit must be 'products'");
    }
  });
});
