module.component('list', {
    templateUrl: "list.html",
    restrict: "E",
    controller: function(listService) {
        this.newItemName = null;
        console.log(this.listName);
        this.list = new List(this.listName);
        if (listService.checkList(this.listName)) {
            this.list.items = listService.getItems(this.listName);
        }
        this.addItem = function () {
            for (var i in this.list.items) {
                if (this.list.items[i] == this.newItemName) {
                    return false;
                }
            }
            this.list.items.push(this.newItemName);
            listService.addItem(this.name, this.newItemName);
            console.log(this.list);
        };
        console.log(this.list);
    },
    bindings: {
        listName: "="
    }
});