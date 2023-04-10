const cart = [
  { name: "Caneta", quantity: 10, price: 7.99, fragile: true },
  { name: "Impressora", quantity: 1, price: 649.5, fragile: true },
  { name: "Caderno", quantity: 4, price: 27.1, fragile: false },
  { name: "Lápis", quantity: 3, price: 5.82, fragile: false },
  { name: "Tesoura", quantity: 1, price: 19.2, fragile: true },
];

// usando filter, map e reduce

// 1. Todos os fragile: true
// 2. Total de cada elemento
// 3. Media dos totais

const fragileItems = () => (item) => item.fragile;
const itemsTotal = () => (item) => item.price * item.quantity;

const averagePrice = () =>
  cart
    .filter(fragileItems())
    .map(itemsTotal())
    .reduce((acc, curr) => acc + curr) / cart.filter(fragileItems()).length;

console.log(averagePrice());
