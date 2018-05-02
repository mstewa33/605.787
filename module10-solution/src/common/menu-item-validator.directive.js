(function () {
    "use strict";

    angular.module('common')
        .directive('menuItemValidator', MenuItemValidator);


    MenuItemValidator.$inject = ['MenuService', '$q'];
    function MenuItemValidator(MenuService, $q) {

        return{
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl){

                ctrl.$asyncValidators.menuItemValidator =
                    function(modelValue){

                    return MenuService.getMenuItems()
                        .then(function(response){
                            var result = MenuService.doesMenuItemExist(response.menu_items, modelValue);

                            if(result)
                                return $q.resolve();
                            else
                                return $q.reject();

                        });
                };
            }
        }
    }
})();
