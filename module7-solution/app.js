(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .filter('angularCurrency', AngularCurrencyFilter)
        .filter('totalPrice', TotalPriceFilter);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', 'totalPriceFilter', 'angularCurrencyFilter'];

    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
        toBuy.list = ShoppingListCheckOffService.toBuyList;

        toBuy.bought = function(item){
            ShoppingListCheckOffService.moveToBoughtList(item);
        }
    };

    function AlreadyBoughtController(ShoppingListCheckOffService, totalPriceFilter, angularCurrencyFilter){
        var bought = this;
        bought.list = ShoppingListCheckOffService.boughtList;

        bought.calculatePurchasePrice = function(item){
            return ShoppingListCheckOffService.calculatePurchasePrice(item);
        }

    };

    function AngularCurrencyFilter() {
        return function(input){
            input = "$$$" + "" + input.toFixed(2) + "";

            return input;
        }
    }

    function TotalPriceFilter(){
        return function(input){
            var totalPrice = input.quantity * input.pricePerItem;

            return totalPrice;
        }
    }

    function ShoppingListCheckOffService(){
        var service = this;

        service.toBuyList = [
            {name: "cookies", quantity :10, pricePerItem: 10.0},
            {name: "bananas", quantity: 5, pricePerItem: 5.0},
            {name: "doughnuts", quantity: 3, pricePerItem: 20.0},
            {name: "apples", quantity: 7, pricePerItem: 14.0},
            {name: "loaf of bread", quantity: 1, pricePerItem: 50.0}
        ]

        service.boughtList = [];

        service.moveToBoughtList = function(item){
            var index = service.toBuyList.findIndex(i => i.name == item.name);

            service.toBuyList.splice(index, 1);
            service.boughtList.push(item);
        }

        service.calculatePurchasePrice = function(item){
            return item.quantity * item.pricePerItem;
        }
    }

})();