(function(){
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsCtrl',ItemsController);

    ItemsController.$inject = ['items']

    function ItemsController(items){
        var controller = this;

        controller.items = items;
    }

})();