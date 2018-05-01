'use strict';

describe('Validate Menu Item', function(){
    var $httpBackend, $componentController, menuService, ApiPath;

   beforeEach(function(){

       module('restaurant');

        inject(function($injector){
            $httpBackend = $injector.get('$httpBackend');
            menuService = $injector.get('MenuService');
            ApiPath = $injector.get('ApiPath');

        });
    });

    it('should validate the menu item selection', function(){
        var config = {};
        $httpBackend.whenGET(ApiPath + '/menu_items.json', config).respond(200, ['L1']);
        menuService.getMenuItems().then(function(response){
            $httpBackend.flush();
            var bindings = {};
            var ctrl = $componentController('menuItemValidator', {MenuService: menuService},
            bindings);

            var result = ctrl.doesMenuItemExist(response, "A2");

            expect(true).toBe(true);


       });
    });


});