(function(){
	'use strict';

	angular.module('app', [
		/*
		 core modules provided...order is unimportant
		*/
		'app.core',
		'app.data', //needs core
		'app.widgets', //needs core

		/*
		 feature modules
		*/
		'app.home',
		'app.admin',
		'app.content',
		'app.documents',
		'app.general',
		'app.calculator',
		'app.investment',
		'app.locations',
		'app.products',
		'app.records',
		'app.sales',
		'app.staff',
		'app.tasks',
		'app.layout',
		'app.landing',
		'app.services',
		'app.directives',
		'app.animations',
		'app.filters'
	]);
	

})();

// (function(){
// 	'use strict';

// 	angular
// 		.module('app', ['ui.router','ngSanitize'])
// 		.config(function($stateProvider, $urlRouterProvider) {
// 			$urlRouterProvider.otherwise('/#');
			
// 			$stateProvider
// 			.state('index', {
// 				url: '/',
// 				templateUrl: myLocalized.app + 'main.html',
// 				controller: 'Main'
// 			})
// 			.state('content',{
// 				url: '/:slug',
// 				templateUrl: myLocalized.app + 'content.html',
// 				controller: 'Content'
// 			});
			
// 		})
// 		.controller('Main', Main)
// 		.controller('Content', Content);


// 		function Main($scope, $http, $stateParams){
// 			$http.get('/gnaas/wp-json/wp/v2/posts?&_embed parameter').success(function(res){
// 				$scope.posts = res;
// 			});

// 			$http.get('/gnaas/wp-json/wp/v2/taxonomies').success(function(res){
// 				$scope.categories = res;
// 			});
// 		}

// 		function Content($scope, $http, $stateParams) {
// 			$http.get('/gnaas/wp-json/wp/v2/posts/?filter[name]=' + $stateParams.slug)
// 			.success(function(res){
// 				$scope.post = res[0];
// 				// console.log($scope.post);
// 				// $scope.attachments = [];
// 				// var attachment = $scope.post._links['http://v2.wp-api.org/attachment'];

				
// 				// $http.get(attachment[0].href)
// 				// 	.success(function(res){
// 				// 		angular.forEach(res, function(result){
// 				// 			$scope.attachments.push(result);
// 				// 		});
// 				// 		console.log($scope.attachments);
// 				// 	});
// 			});
// 		}
// })();