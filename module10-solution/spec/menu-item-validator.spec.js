'use strict';

describe('Validate Menu Item', function(){
    var $httpBackend,
        $compile,
        $rootScope,
        $componentController,
        menuService,
        ApiPath,
        controller,
        form;

   beforeEach(function(){

       module('common');

        inject(function($injector, _$compile_, _$rootScope_){
            $httpBackend = $injector.get('$httpBackend');
            menuService = $injector.get('MenuService');
            ApiPath = $injector.get('ApiPath');
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

            expect(menuService.doesMenuItemExist(result.menu_items, "L1")).toBe(true);

        });
        $httpBackend.flush();

    });


});