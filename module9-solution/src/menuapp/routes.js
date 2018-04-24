(function(){
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/templates/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menuapp/templates/main-categories.template.html',
                controller: 'CategoriesCtrl as categoriesCtrl',
                resolve:{
                    categories: ['MenuDataService', function(MenuDataService){
                        return MenuDataService.getAllCategories();
                    }]
                },
            })
            .state('items', {
                url: '/categories/{shortName}',
                templateUrl: 'src/menuapp/templates/main-items.template.html',
                controller: 'ItemsCtrl as itemsCtrl',
                resolve:{
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
                        return MenuDataService.getItemsForCategory($stateParams.shortName);
                    }]
                }
            })
    };

})();