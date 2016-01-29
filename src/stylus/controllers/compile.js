angular.module('Stylay.stylus')
.controller('stylusCompileController', ($scope, Stylus) => {
  $scope.file = {};

  $scope.compile = () => {
    Stylus.compileFile($scope.file.path)
    .then(() => console.log('Done :)'));
  };
});
