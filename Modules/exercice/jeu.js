'use strict';

const readline = require('readline');
const chalk = require('chalk');
const random = require('./random');

class Jeu {
  constructor({min = 0, max = 100} = {}) {
    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  jouer() {
    if (this._essais.length) {
      console.log(`Vous avez déjà joué : ${this._essais.join(', ')}`);
    }

    this._rl.question('Veuillez saisir un nb : ',  answer => {

      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log(chalk.yellow('Trop petit'));
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      }

      console.log(chalk.green('Gagné !'));
      this._rl.close();
    });
  }
}

module.exports = Jeu;
