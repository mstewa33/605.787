'use strict';

describe('Validate Menu Item', function(){
    var $httpBackend,
        $compile,
        $rootScope,
        $componentController,
        menuService,
        ApiPath,
    form;

   beforeEach(function(){

       module('common');

        inject(function($injector, _$compile_, _$rootScope_){
            $httpBackend = $injector.get('$httpBackend');
            menuService = $injector.get('MenuService');
            ApiPath = $injector.get('ApiPath');

            $compile = _$compile_;
            $rootScope = _$rootScope_;

            var directiveTemplate = null;
            var req = new XMLHttpRequest();
            req.onload = function(){
                directiveTemplate = this.responseText;
            }

            var element = angular.element(
                '<form name="form">' +
                '<input type="text" ng-model="inputValue" name="inputValue" menu-item-validator>' +
                '</form>'
            );
            $rootScope.inputValue = "";
            $compile(element)($rootScope);


            form = $rootScope.form;

        });

    });

    it('should validate the menu item selection', function(){
        var result;
        $httpBackend
            .whenGET(ApiPath + '/menu_items.json')
            .respond(
                {
                    menu_items: [{
                        id: 193,
                        short_name: "L1",
                        name: "Orange Chicken",
                        description: "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
                        price_small: null,
                        price_large: 9.75,
                        small_portion_name: null,
                        large_portion_name: null,
                        created_at: "2018-05-01T01:56:01.852Z",
                        updated_at: "2018-05-01T01:56:01.852Z",
                        category_short_name: "L",
                        image_present: true
                    }]
                }
            );

        menuService.getMenuItems().then(function(response){
            result = response;

            form.inputValue.$setViewValue(result.menu_items[0].short_name);
            form.inputValue.$setTouched();


        })
            .then(function(response){
                expect(form.inputValue.$valid).toBe(true);
            });

        $httpBackend.flush();

    });


});