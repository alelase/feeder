var App = angular.module('FeedApp', []);

	App.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {    
	
	$scope.objectToFeed = {};
	$scope.feeds = [];

	  /*
		$scope.loadButonText="Load";
		$scope.loadFeed=function(e){        
			Feed.parseFeed($scope.feedSrc).then(function(res){
				$scope.loadButonText=angular.element(e.target).text();
				$scope.feeds=res.data.responseData.feed.entries;
			});
		};
		*/
		
		//In case I need to retrieve a feed list from a specific url
		//$scope.feeds = Feed.parseFeed('http://stamurl');
		
		$scope.addFeed=function(){      
			//alert($scope.objectToFeed.mail);		
			$scope.objectToFeed.hash = md5($scope.objectToFeed.mail); 
			//alert($scope.hash);
			
			
			//$scope.feeds.push($scope.objectToFeed);
			/*
			$scope.feeds.push({
				mail: $scope.objectToFeed.mail,
				message: $scope.objectToFeed.msg,
				hash: $scope.objectToFeed.hash
    });
	*/
	$scope.feeds.splice(0, 0, 
				{ mail: $scope.objectToFeed.mail,
				message: $scope.objectToFeed.msg,
				hash: $scope.objectToFeed.hash}
				);
	
	//alert(JSON.stringify($scope.feeds));

		}
		
	}]);


	App.factory('FeedService',['$http',function($http){
		return {
			parseFeed : function(url){
				//return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
				return [];
			}
		}
		
		return {
			getAvatar : function(mail) {
			
			}
		}
	}]);

	/*
	App.directive('gravatar', function() {
 return {
   restrict: 'AE',
   replace: true,
   scope: {
     name: '@',
     height: '@',
     width: '@',
     emailHash: '@'
   },
   link: function(scope, el, attr) {
    scope.defaultImage = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
   },
   template: '<img alt="{{ name }}" height="{{ height }}"  width="{{ width }}" src="https://secure.gravatar.com/avatar/{{ emailHash }}.jpg?s={{ width }}&d={{ defaultImage }}">'
 };
});
*/
