(function(){
	'use strict';

	angular
		.module('app.directives')
		.directive('menuToggle', menuToggle);

	function menuToggle(){
		return {
			restrict: 'E',
			template: '<perfect-scrollbar class="scroller" wheel-propagation="true" wheel-speed="10" min-scrollbar-length="20"> \n' + 
        			  '<md-list layout="column" ng-cloak data-ng-repeat="item in vm.navRoutes"> \n' + 
          			  '<md-button> \n' + 
            		  '<md-icon md-menu-origin md-svg-icon="{{vm.iconUrl[item.routeGroup]}}" class="face" aria-label="More" size="48"></md-icon> \n' +
            		  '{{item.routeGroup}} \n' +
          			  '</md-button> \n' + 
          			  '<md-list> \n' + 
              		  '<md-list-item  data-ng-repeat="r in item.routes track by $index"> \n' + 
                	  '<a ui-sref="{{r.name}}" ui-sref-active="active" \n' + 
                   	  'data-ng-bind-html="r.config.settings.content"></a> \n' + 
              		  '</md-list-item> \n' +
          			  '</md-list>' +
        			  '</md-list> \n' +
      				  '</perfect-scrollbar>',
      		link: function(scope,elem,attrs){

      		}
		};
	}
})();

// communication/business
// action/work
// communication/contacts
// editor/functions calculator
// action/add shopping cart - prices