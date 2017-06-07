// On manipule des objets existants
console.log(typeof Math); // object
console.log(typeof console); // object
console.log(typeof process); // object
console.log(typeof document); // undefined

console.log(typeof Math.sum); // undefined

// On peut étendre un objet
Math.sum = function(a, b) {
    return Number(a) + Number(b);
};

console.log(Math.sum(1, 2)); // 3

delete Math.sum;
console.log(typeof Math.sum); // undefined

// Si besoin ponctuel d'un objet
// on utilise la syntaxe object literal
var contact = {
    prenom: 'Romain',
    hello: function() {
        return 'Hello je suis ' + this.prenom;
    }
};

console.log(typeof contact); // object
console.log(contact.prenom); // Romain
console.log(contact.hello()); // Hello je suis Romain

// Fonction constructeur
var Contact = function(prenom) {
    this.prenom = prenom;
};

Contact.prototype.hello = function() {
    return 'Hello je suis ' + this.prenom;
};

var romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.prenom); // Romain (dans l'objet)
console.log(romain.hello()); // (dans le prototype de Contact)
console.log(romain.hasOwnProperty('prenom')); // true (dans le prototype de Object)
console.log(romain.hasOwnProperty('hello')); // false (dans le prototype de Object)

var eric = new Contact('Eric');
console.log(typeof eric); // object
console.log(eric.prenom); // Eric
console.log(romain.hello === eric.hello); // true

