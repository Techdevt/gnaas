(function(){
	'use strict';

	angular.module('app.investment')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name: 'Investment',
			type: 'Toggle',
			config : {
				children: [
					{
						name : 'home.holdings',
						id : 2,
						url : '^/holdings',
						title: 'Holdings',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'investments/holdings/holdings.html',
										controller : 'Holdings',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Holdings',
				                filter: ['Admin','SuperAdmin','Investors'],
				                routeGroup: 'Investment'
				            }
						}
					},
					{
						name : 'home.investables',
						id : 2,
						url : '^/investables',
						title: 'Investables',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'investments/investables/investables.html',
										controller : 'Investables',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Investables',
				                filter: ['Admin','SuperAdmin','Investors'],
				                routeGroup: 'Investment'
				            }
						}
					},
					{
						name : 'home.investors',
						id : 2,
						url : '^/investors',
						title: 'Investors',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'investments/investors/investors.html',
										controller : 'Investors',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Investors',
				                filter: ['Admin','SuperAdmin'],
				                routeGroup: 'Investment'
				            }
						}
					},
					{
						name : 'home.is',
						id : 2,
						url : '^/income-statement',
						title: 'Investors Income Statement',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'investments/is/is.html',
										controller : 'IS',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Investors Income Statement',
				                filter: ['Admin','SuperAdmin','Retailers'],
				                routeGroup: 'Investment'
				            }
						}
					},
					{
						name : 'home.payments',
						id : 2,
						url : '^/payments',
						title: 'Payment History',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'investments/payments/payments.html',
										controller : 'Payments',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Payment History',
				                filter: ['Admin','SuperAdmin','Retailers'],
				                routeGroup: 'Investment'
				            }
						}
					}
				]
			}
		}];
	}

})();