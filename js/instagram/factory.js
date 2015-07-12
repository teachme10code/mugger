'use strict';

app.factory('Instagram', ['$http',
	function($http) {
		var base = 'https://api.instagram.com/v1';
		var clientId = '2a47fba0b903473a8c4753a6736d1941';
		return {
			'get': function(count, hashtag) {
				var request = '/tags/' + hashtag + '/media/recent';
				var url = base + request;
				var config = {
					'params': {
						'client_id': clientId,
						'count': count,
						'callback': 'JSON_CALLBACK'
					}
				};
				//console.log($http.jsonp(url, config));
				return $http.jsonp(url, config);
			}
		};
	}
]);