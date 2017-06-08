// global.prenom = 'Jean';

var contact = {
    prenom: 'Romain'
};

var hello = function() {
    console.log('Je suis ' + this.prenom);
};

hello();
hello.call(contact, 1, 2, 3);
hello.call(contact, ...[1, 2, 3]);
hello.apply(contact, [1, 2, 3]);
var helloContact = hello.bind(contact);
helloContact();