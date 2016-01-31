angular.module('Stylay.jade')
.controller('jadeCompileController', ($scope, Jade) => {
  $scope.file = {};

  $scope.compile = () => {
    return Jade.compileFile($scope.file.path)
    .then(() => console.log('Done :)'));
  };
});
