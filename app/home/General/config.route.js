(function(){
	'use strict';

	angular.module('app.general')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name: 'General',
			type: 'Heading',
			config : {
	            children: [
	            	{
	            		name: 'Calculator',
	            		type: 'Toggle',
	            		config: {
	            			children: [
		            			{
									name : 'home.sc',
									id : 2,
									url : '^/solar-calculator',
									title: 'Invoice',
									type: 'link',
									config : {
										//add route resolve properties if any on resolve
										views:{
											'' : {
													templateUrl : myLocalized.home + 'general/calculator/sc/sc.html',
													controller : 'SC',
													controllerAs : 'vm'
											}
										},
									    settings: {
							                nav: 2,
							                content: '<i class="fa fa-bar-chart"></i> Solar Calculator',
							                filter: ['Admin','SuperAdmin','Worker','Client','Retailers','Suppliers'],
							                routeGroup: 'General'
							            }
									}
								},
								{
									name : 'home.feu',
									id : 2,
									url : '^/currency-converter',
									title: 'Currency Converter',
									type: 'link',
									config : {
										//add route resolve properties if any on resolve
										views:{
											'' : {
													templateUrl : myLocalized.home + 'general/calculator/cc/cc.html',
													controller : 'CC',
													controllerAs : 'vm'
											}
										},
									    settings: {
							                nav: 2,
							                content: '<i class="fa fa-bar-chart"></i> Currency Converter',
							                filter: ['Admin','SuperAdmin','Worker'],
							                routeGroup: 'General'
							            }
									}
								},
								{
									name : 'home.income',
									id : 2,
									url : '^/income',
									title: 'Expected Income and Returns',
									type: 'link',
									config : {
										//add route resolve properties if any on resolve
										views:{
											'' : {
													templateUrl : myLocalized.home + 'general/calculator/income/income.html',
													controller : 'Income',
													controllerAs : 'vm'
											}
										},
									    settings: {
							                nav: 2,
							                content: '<i class="fa fa-bar-chart"></i> Expected Returns',
							                filter: ['Admin','SuperAdmin'],
							                routeGroup: 'General'
							            }
									}
								}
		            		]
	            		}
	            	},
	            	{
						name : 'home.contacts',
						id : 2,
						url : '^/contacts',
						title: 'Contacts',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'general/contacts/contacts.html',
										controller : 'Contacts',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Contacts',
				                filter: ['Admin','SuperAdmin','Worker','Client','Retailers','Suppliers'],
				                routeGroup: 'General'
				            }
						}
					},
					{
						name : 'home.prices',
						id : 2,
						url : '^/price-listings',
						title: 'Price Listings',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'general/prices/prices.html',
										controller : 'Prices',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Prices',
				                filter: ['Admin','SuperAdmin','Worker','Client','Retailers','Suppliers'],
				                routeGroup: 'General'
				            }
						}
					}
	            ]
			}
		}];
	}

})();