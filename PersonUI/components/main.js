(function() {
    var app = angular.module("mainApp", ['ngRoute']);

    app.config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/persons', {
                    templateUrl: '/PersonUI/components/person/personList.html',
                    controller: 'PersonListController'
                }).
                when('/persons/add', {
                    templateUrl: '/PersonUI/components/person/personAdd.html',
                    controller: 'PersonAddController'
                }).
                when('/persons/:personId', {
                    templateUrl: '/PersonUI/components/order/orderList.html',
                    controller: 'OrderListController'
                }).
                otherwise({
                    redirectTo: '/persons'
                });
        }
    ]);
}());