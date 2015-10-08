(function(){
	'use strict';

	angular.module('app.home')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name : 'home',
			id : 1,
			url : '/home',
			title: 'Home',
			type: 'link',
			config : {
				//add route resolve properties if any on resolve
				//filter routes: all users can access home..passed in whole role object
				views:{
					'' : {
							templateUrl : myLocalized.home + 'home.html',
							controller : 'Home',
							controllerAs : 'vm'
					}
				},
			    settings: {
	                nav: 1,
	                content: '<i class="fa fa-home"></i> Home',
	                filter: ['SuperAdmin', 'Admin', 'Client', 'Retailer', 'Supplier', 'Worker'],
	      			routeGroup: 'General'
	            },
	            resolve: {
	            	permission: function(authorization, config) {
                         return authorization.permissionCheck(config.roles);
                     }
	            }
			}
		}];
	}

})();