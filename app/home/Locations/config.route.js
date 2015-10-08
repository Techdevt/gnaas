(function(){
	'use strict';

	angular.module('app.locations')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name : 'home.locations',
			id : 2,
			url : '^/locations',
			title: 'Locations',
			type: 'link',
			config : {
				//add route resolve properties if any on resolve
				views:{
					'' : {
							templateUrl : myLocalized.home + 'locations/locations.html',
							controller : 'Locations',
							controllerAs : 'vm'
					}
				},
			    settings: {
	                nav: 2,
	                content: '<i class="fa fa-bar-chart"></i> GPS Locations',
	                filter: ['Admin','SuperAdmin','Worker'],
	                routeGroup: 'Places'
	            }
			}
		}];
	}

})();