/**
 * Created by joseph on 1/27/17.
 */
module.component("list", {
    restrict: "E",
    controller: function(listService, $scope){
        console.log(this.listName);

        $scope.listName = this.listName;

        $scope.items = listService.getItems($scope.listName);



        $scope.newItemName = null;
        $scope.addItem = function(name){
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
    templateUrl: "list.html"
});