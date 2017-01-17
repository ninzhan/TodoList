/**
 * Created by joseph on 1/17/17.
 */
(function(){

    module.controller("statesController", [ "$scope", '$state', "listService", function($scope, $state, listService){
        $scope.lists = ["Welcome!"];
        $scope.newListName = null;
        $scope.addList = function(){

            listService.addList($scope.newListName);
            $scope.lists.push($scope.newListName);
            $state.go("lists", { listName: $scope.newListName });
            $scope.newListName = null;
        }
    }]);

})();