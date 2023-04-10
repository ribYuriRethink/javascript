/* 4 - Crie uma função que retorne, a partir da array wishlist, o quanto
custaria se você comprasse todos listados na array. */

const shoppingSpree = () => wishlist.reduce((acc, curr) => acc + curr.price, 0); // seu código aqui

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];
console.log(shoppingSpree()); // 227005
