/**
 * Created by joseph on 1/27/17.
 */
module.component("list", {
    restrict: "E",
    controller: function(listService, $scope, $localStorage){

        $scope.listName = this.listName;

        $scope.items = listService.getItems($scope.listName);
        $scope.newItemName = "Item Name Here";

        $scope.addItem = function(name){
            if(listService.checkItem($scope.listName, name)){
                return false;
            }else{
                listService.addItem($scope.listName, name);
                $scope.items = listService.getItems($scope.listName);
            }
            $scope.newItemName = "Item Name Here";
        };
        $scope.removeDone = function(){
            listService.removeItems($scope.listName);
            $scope.items = listService.getItems($scope.listName);
        };
    },
    bindings: {
        listName: "="
    },
    templateUrl: "list.html"
});