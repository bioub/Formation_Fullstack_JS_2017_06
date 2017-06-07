'use strict';

const readline = require('readline');

// 1 - Ecrire les 4 fonctions random sous la forme :
// const maFonction = function() {
//
// };
const getRandom = function() {
    return Math.random();
};

const getRandomArbitrary = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 2 - Transformer Jeu en class
class Jeu {
    constructor({min = 0, max = 100} = {}) {
        // 3 - Créer l'objet vide en valeur par défaut de la fonction constructeur
        // options = options || {};
        // 4 - Remplacer tous les var par let ou const
        // const min = options.min || 0;
        // const max = options.max || 100;
        this._entierAlea = getRandomIntInclusive(min, max);
        this._essais = [];
        this._rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    jouer() {
        if (this._essais.length) {
            // 5 - Template String
            console.log(`Vous avez déjà joué : ${this._essais.join(', ')}`);
        }

        this._rl.question('Quel est le nombre ? ',  answer => {

            // 6 - Utiliser parseInt et isNaN sur l'objet Number
            const entierSaisi = Number.parseInt(answer);

            if (Number.isNaN(entierSaisi)) {
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
    }
}

const jeu = new Jeu({
    min: 10,
    max: 20,
});
jeu.jouer();




