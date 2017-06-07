/**
 * Génère un nombre aléatoire
 * @returns {number} Le nombre aléatoire
 */
const getRand = function() {
  return Math.random();
};

for (var i=0; i<10; i++) {
    var nbAlea = getRand();

    if (nbAlea > 0.5) {
        console.log(nbAlea);
    }
}

