(function(){
    'use strict';

    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

    function LunchCheckController($scope) {
        $scope.checkIfTooMuch = function () {
            if($scope.lunchMenuList == undefined || $scope.lunchMenuList.length == 0){
                $scope.message = "Please enter data first";
                $scope.color = "enter-data";
            }
            else {
                var lunchItems = $scope.lunchMenuList.split(',').filter(lunchItem => lunchItem.length > 0);

                if (lunchItems.length <= 3) {
                    $scope.message = "Enjoy!";
                    $scope.color = 'enjoy';
                }
                else {
                    $scope.message = "Too  much!";
                    $scope.color = 'too-much';
                }
            }
        };
    };

    LunchCheckController.$inject = ['$scope'];
})();