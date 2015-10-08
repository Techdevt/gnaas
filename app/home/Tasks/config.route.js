(function(){
	'use strict';

	angular.module('app.tasks')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name: 'Tasks',
			type: 'Toggle',
			config : {
	            children: [
		            {
						name : 'home.projects',
						id : 2,
						url : '^/projects',
						title: 'Projects',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'tasks/projects/projects.html',
										controller : 'Projects',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Projects',
				                filter: ['Admin','SuperAdmin','Workers'],
				                routeGroup: 'Tasks'
				            }
						}
					}
	            ]
			}
		}];
	}

})();