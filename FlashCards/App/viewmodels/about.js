define(['durandal/system'], function (system) {
    var vm = {};
    vm.activate = function () {
        system.log("**  activate catalog");
    };
    vm.attached = function () {
        system.log("**  attached catalog");
    };
    //vm.canDeactivate = function () {
    //    return false;
    //}
    vm.canActivate = function () {
        return true;
        // return { redirect: "#catalog" };
    };
    return vm;
});
//# sourceMappingURL=about.js.map 
//# sourceMappingURL=about.js.map