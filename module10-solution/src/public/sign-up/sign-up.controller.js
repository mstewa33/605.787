(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserService'];
    function SignUpController(UserService) {
        var $ctrl = this;
        $ctrl.completed = false;

        $ctrl.signUp = function(){
            UserService.setUser($ctrl.user);
            $ctrl.completed = true;
        }
    }

})();