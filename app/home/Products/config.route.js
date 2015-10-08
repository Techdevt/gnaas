(function(){
	'use strict';

	angular.module('app.products')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name: 'Products',
			type: 'Toggle',
			config : {
				children: [
					{
						name : 'home.inventory',
						id : 2,
						url : '^/inventory',
						title: 'Inventory',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'products/inventory/inventory.html',
										controller : 'Inventory',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Inventory',
				                filter: ['Admin','SuperAdmin','Worker','Client','Retailers','Suppliers'],
				                routeGroup: 'Products'
				            }
						}
					},
					{
						name : 'home.refills',
						id : 2,
						url : '^/refills',
						title: 'Refills',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'products/refills/refills.html',
										controller : 'Refills',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Refills',
				                filter: ['Admin','SuperAdmin','Worker','Retailers','Suppliers'],
				                routeGroup: 'Products'
				            }
						}
					}	
				]
			}
		}];
	}

})();