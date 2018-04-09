(function(){
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];
    MenuSearchService.$inject = ['$http'];

    function NarrowItDownController(MenuSearchService){
        var controller = this;
        controller.found = [];

        controller.getMatchedMenuItems = function(searchTerm){
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

            promise.then(function(result){
                controller.found = result;
            });
        };

        controller.removeItem = function(index){
            controller.found.splice(index, 1);
        }

    };

    function MenuSearchService($http){
        var service = this;

        service.getMatchedMenuItems = function(searchTerm){
            return $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function(result){
                var foundItems = [];
                var menuItems =  result.data.menu_items;
                for(var i = 0; i < menuItems.length; i++){
                    var regex = new RegExp('' + searchTerm +'');
                    if(regex.test(menuItems[i].description)){
                        foundItems.push(menuItems[i]);
                    }


                }
                return foundItems;
            });
        }
    }

    function FoundItems(){
        var ddo = {
            scope: {
                items:'<foundItems',
                onRemove: '&'
            },
            restrict: 'E',
            templateUrl: 'foundItems.html'
        }

        return ddo;
    }

})();