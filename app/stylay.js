'use strict';

let fs = require('fs');
let stylus = require('stylus');

let stylay = angular.module('stylay', ['file-model']);

stylay.controller('homeController', ($scope) => {
  $scope.file = {};

  $scope.compile = () => {
    fs.readFile($scope.file.path, 'utf8', (err, data) => {
      if (err) throw err;

      stylus(data).render((err, data) => {
        if (err) throw err;

        fs.writeFile($scope.file.path + '.css', data, err => {
          if (err) throw err;

          console.log('Done :)');
        });
      });
    });
  };
});
