/**
 * Created by Joseph on 1/6/17.
 */
var module = angular.module("TodoApp", ["ui.router"]);

module.config(function($stateProvider){
    $stateProvider.state('lists', {
        url: "/lists",
        params:{
            listName: "Welcome!"
        },
        templateUrl: 'list.html',
        controller: function($stateParams, listService, $scope){
            console.log($stateParams);
            $scope.name = $stateParams.listName;
            $scope.items = listService.getItems($scope.name);
            $scope.newItemName = null;
            $scope.addItem = function(name){
                console.log($scope.items);
                if(listService.checkItem($scope.name, name)){
                    return false;
                }else{
                    console.log(listService.getItems($scope.name));
                    listService.addItem($scope.name, name);
                    $scope.items = listService.getItems($scope.name);
                }
                $scope.newItemName = null;
            };
            $scope.removeDone = function(){
                console.log("removing");
                listService.removeItems($scope.name);
                $scope.items = listService.getItems($scope.name);
            };
        }
    });
});

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

function Item(text){
    this.text = text;
    this.done = false;
}
function List(name){
    this.name = name;
    this.items = [];
}
