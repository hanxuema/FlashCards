define(['durandal/system', 'services/flashCardService','plugins/router'], function (system, service,router) {
    var vm = {};
    vm.catalogNames = [];
    vm.activate = function () {
        system.log("** activate catalog");
        return service.catalogNames()
            .done(function (data) {
            vm.catalogNames = data;
        });
    };

    //vm.attached = function () {
    //    system.log("**  attached catalog");
    //};

    vm.goToCards = function (name) {
        system.log("Go to " + name);
        router.navigate("#cards/" + encodeURIComponent(name) +'/id/0');
    };

    return vm;
});
