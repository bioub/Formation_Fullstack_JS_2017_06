(function() {
    'use strict';

    var module = angular.module('contact-show/contact-show.controller', []);
    module.controller('ContactShowCtrl', function($scope, $http, $state) {
        var id = $state.params.id;

        $http.get('/api/contacts/' + id)
            .then(function(res) {
               $scope.contact = res.data;
            });
    });
}());