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
			name: 'Documents',
			type: 'Toggle',
			config : {
				children: [
					{
						name : 'home.invoice',
						id : 2,
						url : '^/invoice',
						title: 'Invoice',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'documents/invoice/invoice.html',
										controller : 'Invoice',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Invoice',
				                filter: ['Admin','SuperAdmin','Workers','Retailers','Suppliers'],
				                routeGroup: 'Documents'
				            }
						}
					},
					{
						name : 'home.receipts',
						id : 2,
						url : '^/receipts',
						title: 'Receipts',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'documents/receipts/receipts.html',
										controller : 'Receipts',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Receipts',
				                filter: ['Admin','SuperAdmin','Workers', 'Retailers', 'Suppliers'],
				                routeGroup: 'Documents'
				            }
						}
					}
				]
			}
		}];
	}

})();