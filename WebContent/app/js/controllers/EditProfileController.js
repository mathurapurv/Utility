'use strict';
eventsApp.controller('EditProfileController', function EditProfileController($scope,profilePicBuilder , answerPrayer) {
	//$scope.user = {};
	$scope.prayer = {reply:'' , question : ''};
	
	/* fill up method  */


	
	$scope.changeUserName = function(){
		alert('chk2 : '+$scope.user.userName)
		profilePicBuilder.fetchUserInfo($scope.user.userName , function(data){if(data!=null){$scope.user=data;}	});
	};
	
	$scope.getImageURL = function(picName){
		return profilePicBuilder.buildProfilePicUrl(picName);
	};
	
	$scope.sendPrayer = function(){
		answerPrayer.answerPrayerFromJesus($scope.prayer.question).then(
						function(data){$scope.prayer.reply = data;} , 
						function(statusCode){console.log(statusCode)}
						
		);
	};
	
	

});
