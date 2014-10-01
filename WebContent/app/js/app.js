'use strict';
var eventsApp = angular.module('eventsApp', ['ngRoute'])
				.config(function($routeProvider){
					$routeProvider.when('/sendPrayerToAnyone/:name/:city',
					{
						  templateUrl : 'templates/prayer-template.html',
						  controller : 'PrayerController'
					})
				});


var exploreDirectives = angular.module('exploreDirectives', []);
var editEvents = angular.module('editEvents', []);
