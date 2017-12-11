app.controller('ListingsController', ['ListingsService', function (ListingsService) {
    console.log('ListingsController is running');
    var self = this;
    
    self.message = 'welcome to the listings page'

    self.listings = ListingsService.listings;
    console.log(self.listings);
    

    ListingsService.getListings();

    
   
    


}]);