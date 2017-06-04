define(['durandal/system'], function (system) {

    var vm = {};

 
    vm.activate = function () {
        //system.log("**  activate catalog");

        return system.defer(function (def) {
            setTimeout(function () {
                system.log("**  activate catalog");
                def.resolve();
            }, 2000);
        })
    }
    vm.attached = function () {
        system.log("**  attached catalog");
    }
     

    return vm;
})