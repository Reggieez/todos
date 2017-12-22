(function (angular) {
	'use strict';

	var myApp = angular.module('MyTodos',[]);

	//注册一个主要的控制器
	myApp.controller('MainController',['$scope',function($scope){
		
		$scope.text = ''; /*新建的todo内容*/

		$scope.todos = [{
			id: 1,
			completed: false,
			text: '吃饭'
		},
		{
			id: 2,
			completed: true,
			text: '睡觉'
		},
		{
			id: 3,
			completed: false,
			text: '打豆豆'
		}];

		/*增加新的todo*/
		$scope.add = function(){
			if(!$scope.text){
				return;
			}
			$scope.todos.push({
				id: Math.random(),
				completed: false,
				text: $scope.text
			});
			$scope.text = '';
		};

		/*编辑todo*/
		$scope.currentEditingId = -1;
		$scope.editing = function(id){
			$scope.currentEditingId = id;
		};
		/*当编辑状态的todo失去焦点或点击enter键之后*/
		$scope.save = function(){
			$scope.currentEditingId = -1;
		};

		/*删除todos*/
		$scope.remove = function(id){
			for (var i = 0; i < $scope.todos.length; i++) {
				if($scope.todos[i].id === id){
					$scope.todos.splice(i,1);
					break;
				}
			}
		};

		/*clear completed*/
		$scope.clearCompleted = function(){
		/*	for (var i = 0; i < $scope.todos.length; i++) {
				if($scope.todos[i].completed){
					$scope.todos.splice(i,1);
				}
			}*/
		/*因为每删除一个 数组todos的length都会发生变化 影响到后续的删除 此方法不可行*/

			var result = [];
			for (var i = 0; i < $scope.todos.length; i++) {
				if(!$scope.todos[i].completed){
					result.push($scope.todos[i]);
				}
			}

			$scope.todos = result;
		};

		/*是否存在completed的todo*/
		$scope.existCompleted = function(){
			for (var i = 0; i < $scope.todos.length; i++) {
				if($scope.todos[i].completed){
					return true;
				}
			}
			return false;
		};

		/*全选*/
		var flag = false;
		$scope.checkAll = function(){
			flag = !flag;
			for (var i = 0; i < $scope.todos.length; i++) {
				$scope.todos[i].completed = flag;
			}
		};

	}]);

})(angular);
