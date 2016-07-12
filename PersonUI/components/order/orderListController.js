(function () {
    var app = angular.module("mainApp");
    app.controller("OrderListController", [
        '$scope', '$routeParams', 'PersonService', function ($scope, $routeParams, personService) {
            $scope.orders = [{ id: 1, itemCode: 'Tulips', quantity: 5, dateCreated: '05/05/2016' }, { id: 2, itemCode: 'Roses', quantity: 10, dateCreated: '05/05/2016' }];
            personService.getOrders($routeParams.personId).then(function (data) {
                $scope.orders = data;
            });
        }
    ]);
}());