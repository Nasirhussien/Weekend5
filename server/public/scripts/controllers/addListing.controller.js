app.controller('AddListingController', ['AddListingService', function (AddListingService) {
    console.log('AddListingController is running');
    var self = this;

    self.message = 'HELLOOO'

    self.addListing = AddListingService.addNewListing;

   
    


}]);