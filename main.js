/**
 * Created by Joseph on 1/6/17.
 */
var module = angular.module("TodoApp", ["ui.router"]);

module.controller("statesController", [ "$scope", "stateAdder", '$state', "listService", function($scope, stateAdder, $state, listService){

    $scope.newListName = null;
    $scope.lists = [];

    $scope.newList = function(){
        console.log($scope.newListName);

        if(!listService.checkList($scope.newListName)){
            listService.addList($scope.newListName);
            listService.addItem($scope.newListName, "This is a To-Do Item!");
            $scope.lists.push($scope.newListName);

        }

        var buffer = {
            url: "/"+$scope.newListName,
            templateUrl: "state.html",
            controller: function(){
                this.name = $scope.newListName;
                this.newItemName = null;
                this.items = [];
                this.addItem = function(text){
                    listService.addItem(this.name, text);
                    this.items = listService.getItems(this.name);
                    console.log("stoof");
                }

            }
        };

        stateAdder.addList($scope.newListName, buffer);
        $state.go($scope.newListName);
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


