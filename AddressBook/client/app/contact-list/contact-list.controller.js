(function() {
    'use strict';

    var module = angular.module('contact-list/contact-list.controller', []);

    module.controller('ContactListCtrl', function($scope, $http) {
       $http.get('/api/contacts')
           .then(function(res) {
               $scope.contacts = res.data;
           });

       $scope.supprimer = function(contact) {
            $http.delete('/api/contacts/' + contact._id)
                .then(function() {
                    var i = $scope.contacts.indexOf(contact);
                    $scope.contacts.splice(i, 1);
                });
       };
    });

    /*
    1 - Sur ContactListCtrl :
    Créer une méthode supprimer avec en param d'entrée
    le contact à supprimer (supprimer(contact))
    Dans le contact, l'id : contact._id
    Faire une requete DELETE vers /api/contacts/4J534D43CI5H
    Dans le callback, soit raffraichir la liste
    Soit supprimer le contact du tableau
    2 - Créer la page ContactShow
    - Créer le dossier avec controller + template
    - Créer la route (/contact/show/:id)
    - Insérer la balise script et enregistrer le module dans app.module
    - Au chargement du controller envoyer la requete GET vers
     /api/contacts/4J534D43CI5H
     - Pour récupérer l'ObjectId on peut utiliser $state.params.id
     - Créer le lien avec ui-sref="contact-show({id: '4GS53JG'})

     */
}());