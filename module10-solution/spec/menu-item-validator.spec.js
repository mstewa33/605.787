describe("Validate Menu Item", function(){
    var $httpBackend, $controller, signUpController, menuService, ApiBasePath;

    beforeEach(module('restaurant'));

    beforeEach(inject(function(_$controller_)
    {
        $controller = _$controller_;

        signUpController = $controller('SignUpController');
    }))

    beforeEach(inject(function($injector){
        menuService = $injector.get('MenuService');
        $httpBackend = $injector.get('$httpBackend');
        ApiBasePath = $injector.get('ApiBasePath');
    }))


    it('should validate the menu item selection', function(){
        $httpBackend.whenGET(ApiBasePath + 'menu_items.json').respond(['L1']);
        menuService.getMenuItems().then(function(response){
            
       })
    });


    $httpbackend.flush();
});