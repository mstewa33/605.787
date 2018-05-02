(function () {
    "use strict";

    angular.module('common')
        .directive('menuItemValidator', MenuItemValidator);


    MenuItemValidator.$inject = ['MenuService', '$q'];
    function MenuItemValidator(MenuService, $q) {

        return{
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl){
                ctrl.doesMenuItemExist = function(response, modelValue){
                    if(!response)
                        return false;

                    var results = response.menu_items.filter(function(value){
                        return value.short_name === modelValue;
                    });

                    if(results.length > 0)
                        return true;
                    else
                        return false;
                };

                ctrl.$asyncValidators.menuItemValidator =
                    function(modelValue){

                    return MenuService.getMenuItems()
                        .then(function(response){
                            var result = ctrl.doesMenuItemExist(response, modelValue);

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
