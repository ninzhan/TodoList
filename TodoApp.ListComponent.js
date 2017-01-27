/**
 * Created by joseph on 1/27/17.
 */
module.component("list", {
    restrict: "E",
    controller: function($listService, $scope){
        $scope.items = listService.getItems($scope.listName);
        $scope.newItemName = null;
        $scope.addItem = function(name){
            console.log($scope.items);
            if(listService.checkItem($scope.listName, name)){
                return false;
            }else{
                console.log(listService.getItems($scope.listName));
                listService.addItem($scope.listName, name);
                $scope.items = listService.getItems($scope.listName);
            }
            $scope.newItemName = null;
        };
        $scope.removeDone = function(){
            console.log("removing");
            listService.removeItems($scope.listName);
            $scope.items = listService.getItems($scope.listName);
        };
    },
    bindings: {
        listName: "="
    },
    transclude: true,
    templateUrl: "list.html"
});