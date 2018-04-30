(function () {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);

    function UserService() {
        var service = this;

        service.favoriteMenuItem = "";

        service.getFavoriteMenuItem = function(){
            return service.favoriteMenuItem;
        };

        service.setFavoriteMenuItem = function(menuItem){
            service.favoriteMenuItem = menuItem;
        };

    }
})();
