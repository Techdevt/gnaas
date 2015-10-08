(function(){
	'use strict';

	angular
		.module('blocks.router')
		.provider('routehelperConfig', routehelperConfig)
		.factory('routehelper', routehelper);

	//Must Configure via the routehelperConfig provider

	function routehelperConfig(){
		 /* jshint validthis:true */
        this.config = {
            // These are the properties set via routehelperConfigProvider
            // $stateProvider: $stateProvider
            // docTitle: ''
            // resolveAlways: {ready: function(){ } }
        };

        this.$get = function() {
            return {
                config: this.config
            };
        };

	}

	routehelper.$inject = [
		'$location',
		'$rootScope',
		'$state',
		'logger',
		'routehelperConfig',
		'$urlMatcherFactory'
	];

	function routehelper(
		$location,$rootScope,$state,logger,routehelperConfig,$urlMatcherFactory){
		var handleRouteChangeError = false;
		var routeCounts = {
			errors: 0,
			changes: 0
		};

		var $routes = [];
		var $stateProvider = routehelperConfig.config.$stateProvider;
		var $urlRouterProvider = routehelperConfig.config.$urlRouterProvider;
		var $locationProvider = routehelperConfig.config.$locationProvider;
		var service = {
			configureRoutes: configureRoutes,
			getRoutes: getRoutes,
			routeCounts: routeCounts
		};

		init();

		return service;
		///////////////

		function configureRoutes(routes, deepPush){
			deepPush = deepPush || false;
			routes.forEach(function(route){
				//filter routes before push
				if(!deepPush){$routes.push(route);}
				if(route.config.children){
					configureRoutes(route.config.children);
				}

				route.config.resolve = angular.extend(route.config.resolve || {}, routehelperConfig.config.resolveAlways);
				$urlRouterProvider.when('', '/');
				$urlRouterProvider.when('/about', '/about/');
				$urlRouterProvider.otherwise('/404');
				$stateProvider
					.state(route.name,{
						abstract: route.abstract,
						url: route.url, 
						title: route.title,
						views: route.config.views,
						resolve: route.config.resolve || ''
					});
			});
		}

		function handleRoutingErrors(){
			$rootScope.$on('$routeChangeError',
				function(event, current, previous, rejection){
					if(handleRouteChangeError){
						return;
					}

					routeCounts.errors++;
					handleRouteChangeError = true;
					var destination = (current && (current.title || current.name || current.loadedTemplateUrl)) || 'unknown target';
					var msg = 'Error routing to '+ destination + '. ' + (rejection.msg || '');

					logger.warning(msg, [current]);
					$location.path('/home');
				});
		}

		function init(){
			handleRoutingErrors();
			updateDocTitle();
		}

		function getRoutes(){
			return $routes;
		}

		function updateDocTitle(){
			$rootScope.$on('$stateChangeStart',
				function(event, current, previous){
					routeCounts.changes++;
					handleRouteChangeError = false;
					var title = routehelperConfig.config.docTitle + (current.title || '');
					$rootScope.title = title;
					// For situations where angular bootstrap cannot happen in html tag
					document.querySelector('title').innerHTML = title;
				});
		}

	}
})();