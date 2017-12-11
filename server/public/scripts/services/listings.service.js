app.service('ListingsService',['$http', function($http){
    var self = this;

    self.listings = { list: [] };

    self.getListings = function(){
        $http({
            method: 'GET',
            url: '/listings'
        }).then(function(response){
            console.log(response.data);
            self.listings.list = response.data;
        })
    }
}]);    