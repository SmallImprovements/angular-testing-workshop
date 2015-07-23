describe('Directive Test:', function () {

  var element;
  var $scope;

  beforeEach(function () {
    module('myDirectice');
    inject(function ($compile, $rootScope) {
      $scope = $rootScope.$new();
      element = angular.element('<test/>';
      $compile(element)($scope);
      $scope.$digest();
    });
  });
});