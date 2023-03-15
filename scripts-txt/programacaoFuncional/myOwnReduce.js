Array.prototype.myReduce = function (func, initial) {
  let acumulator = 0;
  let i = 0;
  if (initial != undefined) {
    acumulator = initial;
  } else {
    acumulator = this[0];
    i = 1;
  }
  for (i; i < this.length; i++) {
    acumulator = func(acumulator, this[i], i, this);
  }
  return acumulator;
};

const myArray = [1, 2, 3, 4, 5];

const sum = myArray.myReduce((acc, el) => {
  console.log(acc, el);
  return acc + el;
}, 0);
console.log(sum);
