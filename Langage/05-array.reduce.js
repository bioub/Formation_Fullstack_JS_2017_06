var nbs = [3, 5, 1];

var somme = nbs.reduce((acc, nb) => acc + nb, 0);

console.log(somme);

// acc: 0, nb; 3, return 3;
// acc: 3, nb: 5, return 8;
// acc: 8, nb 1, return 9;