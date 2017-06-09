(function() {
    'use strict';

    var module = angular.module('contact-list/contact-list.controller', []);

    module.controller('ContactListCtrl', function($scope, $http) {
       $http.get('/api/contacts')
           .then(function(res) {
               $scope.contacts = res.data;
           });
    });
}());