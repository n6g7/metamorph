'use strict';

let stylay = angular.module('Stylay', [
  'file-model',
  'ui.router',
  'Stylay.common',
  'Stylay.jade',
  'Stylay.stylus'
]);

stylay.config(($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    views: {
      jade: {
        controller: 'jadeCompileController',
        templateUrl: 'jade/template.html'
      },
      stylus: {
        controller: 'stylusCompileController',
        templateUrl: 'stylus/template.html'
      }
    }
  });
});
