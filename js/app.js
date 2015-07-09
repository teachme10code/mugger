"use strict";

angular.module('mugger', [])
	.controller('imageController'), ['$scope', '$http', function($scope, $http) {
	  $scope.getImages = function() {
	    var url = "https://api.instagram.com/v1/tags/"+$scope.tag+"/media/recent?client_id"+$scope.apikey;
	    var request = {
	      apikey: "2a47fba0b903473a8c4753a6736d1941";, //client_id
	      text: text,
	      outputMode: 'json',
	      callback: "JSON_CALLBACK"
	    };

	    $http({
	      method: 'JSONP',
	      url: url,
	      params: request
	    })
	    .success(function(result) {
	      $scope.analysis = result;
	    })
	    .error(function() {
	      alert('error');
	    });
	  };
	});

	//angular.forEach($scope.floorplans, function(floorplan, key) {
		//console.log(floorplan.url);
	//	this.push(floorplan.url);
	//}, $scope.floorplanList);
}]);

//example: https://api.instagram.com/v1/tags/dog/media/recent?max_id=10&min_id=10