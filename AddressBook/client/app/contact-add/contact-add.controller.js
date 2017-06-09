(function() {
    'use strict';

    var module = angular.module('contact-add/contact-add.controller', []);
    module.controller('ContactAddCtrl', function($scope, $http, $state) {
       $scope.ajouter = function() {
           $http.post('/api/contacts', $scope.contact)
               .then(function() {
                   $state.go('contact-list');
               });
       };
    });
}());