(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['menuItem', 'user'];
    function MyInfoController(menuItem, user) {
        var $ctrl = this;
        $ctrl.menuItem = menuItem;
        $ctrl.user = user;
    }

})();