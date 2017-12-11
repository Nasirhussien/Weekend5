app.service('RentalsService',['$http', function($http){
    var self = this;

    self.rentals = { list: [] };
    
        self.getRentals = function(){
            $http({
                method: 'GET',
                url: '/rentals'
            }).then(function(response){
                console.log(response.data);
                self.rentals.list = response.data;
            })
        }
}]);  