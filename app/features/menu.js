(function(){
	'use strict';

	angular
		.module('app.services')
		.factory('menu', Menu);

	Menu.$inject = ['routehelper','$rootScope','$location'];
	function Menu(routehelper,$rootScope,$location){
		var sections = [];
		var routes = routehelper.getRoutes();
		var headings = ['General', 'Admin', 'Documents', 'Investments', 'Products', 'Places', 'Tasks', 'Store', 'Records', 'Staff'];

		angular.forEach(routes, function(route){
			var context = route.config.settings;
			if(angular.isDefined(context)){
				if(context.type === 'link'){
					//get heading
					//ispage
					//istoggle
					//islink
				}
				else if(context.type === 'toggle'){
					//get toggle parent
				}
				else if(context.type === 'heading'){
					//push raw
				}
			}
		});

		$rootScope.$on('$locationChangeSuccess', onLocationChange);

		var service = {
			sections: sections,
			sortByName: sortByName,
			selectSection: selectSection,
			toggleSelectSection: toggleSelectSection,
			isSectionSelected: isSectionSelected,
			selectPage: selectPage,
			isPageSelected: isPageSelected,
			buildMenu: buildMenu
		};
		return service;
		///////////////

		function sortByName(a,b) {
		  return a.name < b.name ? -1 : 1;
		}

		function sortByHumanName(a,b) {
		    return (a.humanName < b.humanName) ? -1 :(a.humanName > b.humanName) ? 1 : 0;
	  	}

		function selectSection(section) {
	      service.openedSection = section;
	    }

	    function toggleSelectSection(section) {
	      service.openedSection = (service.openedSection === section ? null : section);
	    }

	    function isSectionSelected(section) {
	      return service.openedSection === section;
	    }

	    function selectPage(section, page) {
	      service.currentSection = section;
	      service.currentPage = page;
	    }

	    function isPageSelected(page) {
	      return service.currentPage === page;
	    }

	      function onLocationChange() {
		    var path = $location.path();
		    var isDashPage = (path.substr(0,8) === 'dashboard') ? true: false;

		    if(isDashPage){
			    var introLink = {
			      name: 'Dashboard',
			      url:  '/',
			      type: 'link'
			    };

			    if (path === '/') {
			      service.selectSection(introLink);
			      service.selectPage(introLink, introLink);
			      return;
			    }

			    var matchPage = function(section, page) {
			      if (path === page.url) {
			        service.selectSection(section);
			        service.selectPage(section, page);
			      }
			    };

			    sections.forEach(function(section) {
			      if(section.children) {
			        // matches nested section toggles, such as API or Customization
			        section.children.forEach(function(childSection){
			          if(childSection.pages){
			            childSection.pages.forEach(function(page){
			              matchPage(childSection, page);
			            });
			          }
			        });
			      }
			      else if(section.pages) {
			        // matches top-level section toggles, such as Demos
			        section.pages.forEach(function(page) {
			          matchPage(section, page);
			        });
			      }
			      else if (section.type === 'link') {
			        // matches top-level links, such as "Getting Started"
			        matchPage(section, section);
			      }
			    });
		    }
		  }

		function buildMenu(object,child,depth){
			depth = depth || false;
			if(depth){ object = []; }
			angular.forEach(child, function(child){
				if(!angular.isDefined(child.type)) { return; }
				if(child.type === 'link'){
					object.push(child);
				}
				else if(child.type === 'toggle'){
					child.pages = child.children.sort(sortByName);
					delete child.children;
					object.push(child);
					angular.forEach(child.pages, function(deepChild, index){
						if(!angular.isDefined(deepChild.children)) {return;}
						buildMenu(child.pages[index], deepChild.children, true);
					});
				}
				else if(child.type === 'heading'){
					object.push(child);
					var parent = child;
					angular.forEach(child.children, function(deepChild, index){
						if(!angular.isDefined(deepChild.children)) {return;}
						buildMenu(parent.children[index], deepChild.children, true);
					});
				}
			});	
			return object;		
		}
	}
})();
