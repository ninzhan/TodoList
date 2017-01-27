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
        template: '<list listName="name"></list>',
        controller: function($stateParams, listService, $scope){

            $scope.name = $stateParams.listName;

        }
    });
});



function Item(text){
    this.text = text;
    this.done = false;
}
function List(name){
    this.name = name;
    this.items = [];
}
