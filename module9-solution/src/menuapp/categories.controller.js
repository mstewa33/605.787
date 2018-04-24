(function(){
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesCtrl', CategoriesController);

    CategoriesController.$inject = ['categories']

    function CategoriesController(categories){
        var controller = this;

        controller.categories = categories;
    }

})();