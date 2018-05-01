(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      return $http.get(ApiPath + '/menu_items/' + category + '.json', config).then(function (response) {
          return response.data;
      });
    }
    else {
        return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
            return response.data;
        });
    }
  };

}



})();
