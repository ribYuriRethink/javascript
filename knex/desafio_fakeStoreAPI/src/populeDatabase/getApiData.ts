const fetchApi = async (url: string) => {
  const result = await fetch(url).then((request: any) => request.json());
  return result;
};

const getAllProducts = async (endpoint: string) => {
  if (endpoint !== "products") throw new Error("Endpoit must be 'products'");
  const url = "https://fakestoreapi.com/" + endpoint;
  const result = await fetchApi(url);
  return result;
};

const showInConsole = async (callback: any) => console.log(await callback);

export { getAllProducts };
