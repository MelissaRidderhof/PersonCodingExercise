(function() {
    var app = angular.module("mainApp");
    app.service("PersonService", [
        '$http', function($http) {
            return {
                getPeople: function() {
                    return $http.get("http://localhost/PersonAPI/api/Person").then(function(response) {
                        return response.data;
                    });
                },
                addPerson: function(title, firstName, lastName, age) {
                    return $http.post("http://localhost/PersonAPI/api/Person", { "title": title, "firstName": firstName, "lastName": lastName, "age": age });
                },
                getOrders: function(personId) {
                    return $http.get("http://localhost/PersonAPI/api/Person/" + personId).then(function(response) {
                        return response.data;
                    });
                },

            }
        }
    ]);
}());