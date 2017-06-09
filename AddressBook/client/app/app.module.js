(function() {
    'use strict';

    var module = angular.module('app.module', [
        'contact-list/contact-list.controller',
        'contact-add/contact-add.controller',
        'contact-show/contact-show.controller',
        'ui.router',
    ]);

    module.config(function($stateProvider) {

        $stateProvider.state('contact-list', {
            url: '/contacts/list',
            controller: 'ContactListCtrl',
            templateUrl: 'app/contact-list/contact-list.template.html'
        });

        $stateProvider.state('contact-add', {
            url: '/contacts/add',
            controller: 'ContactAddCtrl',
            templateUrl: 'app/contact-add/contact-add.template.html'
        });

        $stateProvider.state('contact-show', {
            url: '/contacts/:id',
            controller: 'ContactShowCtrl',
            templateUrl: 'app/contact-show/contact-show.template.html'
        });

    });

}());