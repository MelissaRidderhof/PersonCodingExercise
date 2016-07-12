(function () {
    var app = angular.module("mainApp");
    app.controller("PersonListController", [
        '$scope','$location', 'PersonService', function ($scope, $location, personService) {
            $scope.people = [{ id:1 ,title:'Miss', firstName:'Anne', lastName:'Smith', age: 12}, {id: 2, title:'Mr', firstName:'John', lastName:'Doe', age: 50 }];
            
            $scope.showOrders = function(personId) {
                $location.path("/persons/" + personId);
            }

            $scope.add = function () {
                $location.path("/persons/add");
            }

            personService.getPeople().then(function (data) {
                $scope.persons = data;
            });

        }
    ]);
}());