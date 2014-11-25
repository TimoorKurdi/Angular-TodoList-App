var app = angular.module("angularToDoApp", []);

    app.controller("AppCtrl", function($scope) {

      $scope.todos = [];

      $scope.addToDo = function(){
        $scope.todos.push({'title':$scope.newToDo, 'done':false})
      $scope.newToDo = ''
      }

    $scope.clearCompleted = function(){
      $scope.todos = $scope.todos.filter(function(item) {
    return !item.done
    });
  }
});