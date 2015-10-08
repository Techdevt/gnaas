(function(){
	'use strict';

	angular.module('app.records')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name: 'Records',
			type: 'Toggle',
			config : {
	            children: [
		            {
						name : 'home.conversations',
						id : 2,
						url : '^/conversations',
						title: 'Client Conversation Recordings',
						type: 'link',
						config : {
							//add route resolve properties if any on resolve
							views:{
								'' : {
										templateUrl : myLocalized.home + 'records/conversations/conversations.html',
										controller : 'Conversations',
										controllerAs : 'vm'
								}
							},
						    settings: {
				                nav: 2,
				                content: '<i class="fa fa-bar-chart"></i> Conversations',
				                filter: ['Admin','SuperAdmin','Workers'],
				                routeGroup: 'Records'
				            }
						}
					}
	            ]
			}
		}];
	}

})();