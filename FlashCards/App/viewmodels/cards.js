define(['durandal/system', 'models/selectedCards', 'plugins/router'], function (system, selectedCards, router) {

    var vm = {};
    nameParam = "";

    vm.selected = selectedCards;

    vm.router = router.createChildRouter()
        .makeRelative({
            route: 'cards/:param1'
        }).map([
            { route: ['id(/:param2)', ''], moduleId: 'viewmodels/card' }
        ]).buildNavigationModel();

    vm.activate = function (name) {
        system.log("** activate for cards");
        nameParam = name;
        //selectedCards.select(name);
    }

    vm.binding = function () {
        system.log("*********** binding complete for index");
        return selectedCards.select(nameParam);
    }

    vm.previous = function () {
        if (selectedCards.hasPrevious) {
            navigate(selectedCards.previousIndex());
        }
    }

    vm.next = function () {
        if (selectedCards.hasNext) {
            navigate(selectedCards.nextIndex());
        }
    }

    function navigate(index) {
        var url = "#cards/" + encodeURIComponent(selectedCards.name) + "/id/" + index;

        system.log(url);
        router.navigate(url);
    }

    return vm;
})