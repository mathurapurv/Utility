'use strict';
eventsApp.controller('PrayerController', function PrayerController($scope,$routeParams ,  answerPrayer) {
	$scope.deity=$routeParams.name
	$scope.city=$routeParams.city
});
