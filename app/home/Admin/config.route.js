(function(){
	'use strict';

	angular.module('app.admin')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name: 'Admin',
			type: 'Heading',
			config : {
	            children: [
	            	{
						name : 'home.analytics',
						id : 2,
						url : '^/analytics',
						title: 'Analytics',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home +'admin/analytics/analytics.html',
										controller : 'Analytics',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Analytics',
				                filter: ['Admin','SuperAdmin'],
				                routeGroup: 'Admin'
				            }
						}
					},
					{
						name: 'Content Management',
						type: 'Toggle',
						config : {
							children: [
								{
									name : 'home.contact',
									id : 2,
									url : '^/cms/contact',
									title: 'Change Contact Information',
									type: 'link',
									config : {
										//add route resolve properties if any on resolve
										views:{
											'' : {
													templateUrl : myLocalized.home +'admin/content/contact/contact.html',
													controller : 'Contact',
													controllerAs : 'vm'
											}
										},
									    settings: {
							                nav: 2,
							                content: '<i class="fa fa-bar-chart"></i> Contact',
							                filter: ['Admin','SuperAdmin'],
							                routeGroup: 'General'
							            }
									}
								},
								{
									name : 'home.slideshow',
									id : 2,
									url : '^/cms/slideshow',
									title: 'Slideshow Settings',
									type: 'link',
									config : {
										//add route resolve properties if any on resolve
										views:{
											'' : {
													templateUrl : myLocalized.home + 'admin/content/slideshow/slideshow.html',
													controller : 'Slideshow',
													controllerAs : 'vm'
											}
										},
									    settings: {
							                nav: 2,
							                content: '<i class="fa fa-bar-chart"></i> Slideshow',
							                filter: ['Admin','SuperAdmin'],
							                routeGroup: 'General'
							            }
									}
								},
								{
									name : 'home.settings',
									id : 2,
									url : '^/cms/settings',
									title: 'Settings - Website',
									type: 'link',
									config : {
										//add route resolve properties if any on resolve
										views:{
											'' : {
													templateUrl : myLocalized.home + 'admin/content/settings/settings.html',
													controller : 'Settings',
													controllerAs : 'vm'
											}
										},
									    settings: {
							                nav: 2,
							                content: '<i class="fa fa-bar-chart"></i> Settings',
							                filter: ['Admin','SuperAdmin'],
							                routeGroup: 'General'
							            }
									}
								}
							]
						}
					},
					{
						name : 'home.permissions',
						id : 2,
						url : '^/permissions',
						title: 'Permissions',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'permissions/permissions.html',
										controller : 'Permissions',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Permissions',
				                filter: ['Admin','SuperAdmin'],
				                routeGroup: 'Admin'
				            }
						}
					}
	            ]
			}
		}];
	}

})();