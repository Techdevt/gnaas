(function(){
	'use strict';

	angular.module('app.staff')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name: 'Staff',
			type: 'Toggle',
			config : {
	            children: [
		            {
						name : 'home.retailers',
						id : 2,
						url : '^/retailers',
						title: 'Retailers',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'staff/retailers/retailers.html',
										controller : 'Retailers',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Retailers',
				                filter: ['Admin','SuperAdmin','Retailers'],
				                routeGroup: 'Staff'
				            }
						}
					},
					{
						name : 'home.suppliers',
						id : 2,
						url : '^/suppliers',
						title: 'Suppliers',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'staff/suppliers/suppliers.html',
										controller : 'Suppliers',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Suppliers',
				                filter: ['Admin','SuperAdmin'],
				                routeGroup: 'Staff'
				            }
						}
					},
					{
						name : 'home.workers',
						id : 2,
						url : '^/workers',
						title: 'Workers',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'staff/workers/workers.html',
										controller : 'Workers',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Workers',
				                filter: ['Admin','SuperAdmin','Worker'],
				                routeGroup: 'Staff'
				            }
						}
					}
	            ]
			}
		}];
	}

})();