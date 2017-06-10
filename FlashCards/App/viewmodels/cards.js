define(['durandal/system', 'models/selectedCards', 'plugins/router'], function (system, selectedCards, router) {

    var vm = {};

    vm.selected = selectedCards;

    vm.router = router.createChildRouter()
        .makeRelative({
            route: 'cards/:param1'
        }).map([
            { route: ['id(/:param2)', ''], moduleId: 'viewmodels/card' }
        ]).buildNavigationModel();

    vm.activate = function (name) {
        system.log("** activate for cards");
        selectedCards.select(name);
    }

    return vm;
})