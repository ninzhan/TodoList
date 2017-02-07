/**
 * Created by joseph on 1/17/17.
 */
(function(){

    module.controller("statesController", [ "$scope", '$state', "listService", function($scope, $state, listService){
        $scope.lists = listService.lists;
        $scope.newListName = "New List Here";
        $scope.addList = function(){
            listService.addList($scope.newListName);
            $scope.lists.push($scope.newListName);
            $state.go("lists", { listName: $scope.newListName });
            $scope.newListName = "New List Here";

        }
    }]);

})();