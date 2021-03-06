var logClosure = function(msg) {
    // Portée de closure
    // Portée sauvegardé quand on imbrique 2
    // fonction et que la fonction est accessible
    // en dehors
    return function() {
        console.log(msg);
    };
};

var logHello = logClosure('Hello');
logHello(); // Hello
logHello(); // Hello
logHello(); // Hello

for (var i=0; i<3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// 3 3 3

for (var i=0; i<3; i++) {
    setTimeout(logClosure(i), 1000);
}
// 0 1 2

/*
var createButton = function(cptInitial) {
    var btn = document.createElement('button');
    btn.textContent = cptInitial;

    btn.addEventListener('click', function() {
        btn.textContent++;
    });
};
createButton();
*/