
// REST Parameters
let sum = function(...nbs) {
  return nbs.reduce((acc, nb) => acc + nb);
};

console.log(sum(1, 2, 3, 4)); // 10

// SPREAD Parameters
var nbs = [1, 2, 3, 4, 5];
console.log(sum(...nbs)); // 15

var autreTab = [10, 9, 8, ...nbs];