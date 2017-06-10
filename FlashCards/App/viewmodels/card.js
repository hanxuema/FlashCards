define(['modules/selectedCards'], function (selectedCards) {

    var vm = {};
    vm.indexParam = 0;
    vm.selected = selectedCards;

    vm.activate = function (name, index) {
        vm.indexParam = index;
        selectedCards.setIndex(index);
    }

    return vm;
})