(function(){
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', ShoppingListCheckOffService)
        .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];
    MenuSearchService.$inject = ['$http'];

    function NarrowItDownController(MenuSearchService){
        var found;
    };

    function MenuSearchService($http){
        var service = this;

        service.getMatchedMenuItems = function(searchTerm){
            return $http().then(function(result){
               var foundItems;

               return foundItems;
            });
        }
    }

    function FoundItems(){
        var ddo = {
            template: ''
        }

        return ddo;
    }

})();