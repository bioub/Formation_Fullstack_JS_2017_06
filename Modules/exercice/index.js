const Jeu = require('./jeu');

var prenom = 'Romain';

const jeu = new Jeu({
  min: 10,
  max: 20,
});
jeu.jouer();