(function(){
	'use strict';

	angular.module('app.home')
		   .controller('Home', Home);

	Home.$inject = ['$scope','auth','routehelper','$state', 'RoleManager','common','$rootScope','$location','menu'];
	function Home($scope,auth,routehelper,$state,RoleManager,common,$rootScope,$location,menu){
		var vm = this;
        vm.Roles = RoleManager.getUserRoles();
        vm.title = common.getTitle;
		vm.routes = routehelper.getRoutes();
        console.log(vm.routes);
        vm.iconUrl = common.icons;
        vm.src = './bower_components/material-design-icons';
        vm.sections = menu.sections;

		activate();

        function activate() {
            common.setTitle($location.path().substr(1,9));
            getNavRoutes();
            vm.navRoutes = groupRoutes(vm.navRoutes);
            var data = [
                {
                  name: 'Customization',
                  type: 'heading',
                  children: [
                    {
                      name: 'CSS',
                      type: 'toggle',
                      children: [{
                      name: 'Theming',
                      type: 'toggle',
                      children: [
                        {
                      name: 'Theming',
                      type: 'toggle',
                      children: [
                        {
                          name: 'Introduction and Terms',
                          url: '/Theming/01_introduction',
                          type: 'link'
                        },
                        {
                          name: 'Declarative Syntax',
                          url: '/Theming/02_declarative_syntax',
                          type: 'link'
                        },
                        {
                          name: 'Configuring a Theme',
                          url: '/Theming/03_configuring_a_theme',
                          type: 'link'
                        },
                        {
                          name: 'Multiple Themes',
                          url: '/Theming/04_multiple_themes',
                          type: 'link'
                        }
                      ]
                    },
                        {
                          name: 'Declarative Syntax',
                          url: '/Theming/02_declarative_syntax',
                          type: 'link'
                        },
                        {
                          name: 'Configuring a Theme',
                          url: '/Theming/03_configuring_a_theme',
                          type: 'link'
                        },
                        {
                          name: 'Multiple Themes',
                          url: '/Theming/04_multiple_themes',
                          type: 'link'
                        }
                      ]
                    },
                        {
                          name : 'Button',
                          url: '/CSS/button',
                          type: 'link'
                        },
                        {
                          name : 'Checkbox',
                          url: '/CSS/checkbox',
                          type: 'link'
                        }]
                    },
                    {
                      name: 'Theming',
                      type: 'toggle',
                      children: [
                        {
                          name: 'Introduction and Terms',
                          url: '/Theming/01_introduction',
                          type: 'link'
                        },
                        {
                          name: 'Declarative Syntax',
                          url: '/Theming/02_declarative_syntax',
                          type: 'link'
                        },
                        {
                          name: 'Configuring a Theme',
                          url: '/Theming/03_configuring_a_theme',
                          type: 'link'
                        },
                        {
                          name: 'Multiple Themes',
                          url: '/Theming/04_multiple_themes',
                          type: 'link'
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'CSS',
                  type: 'toggle',
                  children: [{
                      name: 'Typography',
                      url: '/CSS/typography',
                      type: 'link'
                    },
                    {
                      name : 'Button',
                      url: '/CSS/button',
                      type: 'link'
                    },
                    {
                      name : 'Checkbox',
                      url: '/CSS/checkbox',
                      type: 'link'
                    }]
                },
                {
                  name : 'Checkbox',
                  url: '/CSS/checkbox',
                  type: 'link'
                }
            ];
            var t = menu.buildMenu([], data);
            console.log(t);
        }



        function getNavRoutes() {
            //add route group sort
            vm.navRoutes = vm.routes.filter(function(r) {
                if(angular.isDefined(r.config.settings)){
                    if(filterRoutes(r.config.settings.filter)){
                        // return r.config.settings && r.config.settings.nav && r.config.routeGroup;
                        return {
                            settings: r.config.settings,
                            nav: r.config.settings.nav,
                            routeGroup: r.config.routeGroup,
                            iconUrl: r.config.settings.iconUrl 
                        };
                    }
                }
            }).sort(function(r1, r2){
                    //add route group sorting
                    return r1.nav - r2.nav;
            });
        }

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toStateParams, current){
            common.setTitle(toState.title);
        });

        function groupRoutes(data){
            var result = _.chain(data)
                .groupBy('config.settings.routeGroup')
                .pairs()
                .map(function(currentItem) {
                    return _.object(_.zip(['routeGroup', 'routes'], currentItem));
                })
                .map(function(groupedItem){
                    return groupedItem;
                })
                .value();
            return result;
        }

        function setIconUrl(){
            
        }

        function filterRoutes(allowedRoles){
            var isAllowed = false;
            angular.forEach(vm.Roles, function(role){
                if(allowedRoles.indexOf(role) !== -1){
                   isAllowed = true;
                }
            });
            return isAllowed;
        }


        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
}
})();

