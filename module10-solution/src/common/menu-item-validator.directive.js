(function () {
    "use strict";

    angular.module('common')
        .directive('MenuItemValidator');


    MenuItemValidator.$inject = ['menuItems'];
    function MenuItemValidator(menuItems) {
        return{
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl){
                ctrl.$syncValidators.menuItems =
                    function(modelValue){
                        if(ctrl.$isEmpty(modelValue)){
                            return false;
                        }

                        if(menuItems.indexOf(modelValue) > -1)
                            return true
                        else
                            return false
                    }
            }
        }
    }
})();
