(function () {
    var app = angular.module("mainApp");
    app.controller("PersonAddController", [
        '$scope', 'PersonService', function ($scope, personService) {

            $scope.title = "";
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.age = 0;

            $scope.save = function () {
                personService.addPerson($scope.title, $scope.firstName, $scope.lastName, $scope.age);
            }
        }
    ]);
}());