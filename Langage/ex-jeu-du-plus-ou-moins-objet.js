const readline = require('readline');

function getRandom() {
    return Math.random();
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var Jeu = function(options) {
    options = options || {};
    var min = options.min || 0;
    var max = options.max || 100;
    this._entierAlea = getRandomIntInclusive(min, max);
    this._essais = [];
    this._rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
};

Jeu.prototype.jouer = function() {
    if (this._essais.length) {
        console.log('Vous avez déjà joué : ' + this._essais.join(', '));
    }

    this._rl.question('Quel est le nombre ? ',  answer => {

        var entierSaisi = parseInt(answer);

        if (isNaN(entierSaisi)) {
            console.log('Erreur : il faut saisir un nombre');
            return this.jouer();
        }

        this._essais.push(entierSaisi);

        if (entierSaisi < this._entierAlea) {
            console.log('Trop petit');
            return this.jouer();
        }

        if (entierSaisi > this._entierAlea) {
            console.log('Trop grand');
            return this.jouer();
        }

        console.log('Gagné !');
        this._rl.close();
    });
};

var jeu = new Jeu({
    min: 10,
    max: 20,
});
jeu.jouer();




