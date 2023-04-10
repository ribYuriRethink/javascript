// Testing numbers
module.exports.absolute = function (number) {
  // Testes permitem uma refatoração mais confiante

  // if (number > 0) return number;
  // if (number < 0) return -number;
  // return 0;
  return number >= 0 ? number : -number;
};

// Testing strings
module.exports.greet = function (name) {
  return "Welcome " + name + "!";
};

// Testing arrays
module.exports.getCurrencies = function () {
  return ["USD", "AUD", "EUR"];
};

// Testing objects
module.exports.getProduct = function (productId) {
  return { id: productId, price: 10 };
};

// Testing exceptions
module.exports.registerUser = function (username) {
  if (!username) throw new Error("Username is required.");

  return { id: new Date().getTime(), username: username };
};
