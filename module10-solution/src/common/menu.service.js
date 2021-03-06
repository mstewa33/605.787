(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function (category) {
      var config = {};
      if(category){
          return $http.get(ApiPath + '/categories' + category + '.json').then(function (response) {
              return response.data;
          });
      }else {
          return $http.get(ApiPath + '/categories.json').then(function (response) {
              return response.data;
          });
      }
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      var response = $http.get(ApiPath + '/menu_items/' + category + '.json', config).then(function (response) {
          return response.data;
      });

      return response;
    }
    else {
        var response = $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
            return response.data;
        });

        return response;
        }
  };

    service.doesMenuItemExist = function(menu_items, modelValue){
        if(!menu_items)
            return false;

        var results = menu_items.filter(function(value){
            return value.short_name === modelValue;
        });

        if(results.length > 0)
            return true;
        else
            return false;
    };


}



})();
