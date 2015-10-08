(function(){
	'use strict';

	angular.module('app.sales')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name: 'Sales',
			type: 'Heading',
			config : {
	            children: [
	            	{
						name : 'home.purchases',
						id : 2,
						url : '^/sales',
						title: 'Sales',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'sales/purchases/purchases.html',
										controller : 'Purchases',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Purchases',
				                filter: ['Admin','SuperAdmin','Workers'],
				                routeGroup: 'Sales'
				            }
						}
					},
					{
						name : 'home.returns',
						id : 2,
						url : '^/returns',
						title: 'Company Income Statement',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'sales/returns/returns.html',
										controller : 'Returns',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Returns',
				                filter: ['Admin','SuperAdmin','Workers'],
				                routeGroup: 'Sales'
				            }
						}
					},
					{
						name : 'home.sr',
						id : 2,
						url : '^/sales-returns',
						title: 'Sales Returns',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'sales/sr/sr.html',
										controller : 'SR',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Sales Returns',
				                filter: ['Admin','SuperAdmin','Workers'],
				                routeGroup: 'Sales'
				            }
						}
					}
	            ]
			}
		}];
	}

})();