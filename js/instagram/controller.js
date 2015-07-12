'use strict';

app.controller('InstagramController', ['$scope', 'Instagram',
	function($scope, Instagram) {
		$scope.getDefaultImages = function() {
			Instagram.get(25, "travel").success(function(response) {
				return instagramSuccess(response.data);
			});
		}


		var instagramSuccess = function(data) {
			if (data.length > 0) {
				$scope.images = data;
				$scope.data = {};
			} else {
				$scope.error = "This hashtag has returned no results";
			}
		};

		$scope.getImages = function() {
			Instagram.get(25, $scope.data.tag).success(function(response) {
				console.log(response.data);
				return instagramSuccess(response.data);
			});
		}
	}
]);