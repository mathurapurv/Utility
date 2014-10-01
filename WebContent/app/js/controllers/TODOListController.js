'use strict';
eventsApp.controller('TODOListController', function ($scope) {

	alert('inside controller')
	
	$scope.model = { 	user : "Apurv" , 
						items : [
						         	{name : "Get Milk" , done : true },
						         	{name : "Bike repair" , done : true },
						         	{name : "Finish report" , done : false },
						         	{name : "Learn guitar" , done : true },
						         	{name : "book tickets" , done : false }
						         ]
					};
	
	$scope.addTask = function(newTaskDesc ) {		
		$scope.model.items.push(	{name : newTaskDesc  , done : false }  );
		$scope.newTaskDesc = '';
	}
	
	
	$scope.incompleteCount = function() {	
		var incompleteCount = 0;
		angular.forEach($scope.model.items ,  function(item){
			if(!item.done)incompleteCount++;
		});
		
		return incompleteCount;
	}
	
	
	
	
	
});
