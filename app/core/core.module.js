(function(){
'use strict';

	angular.module('app.core',[
		/*
		angular modules
		*/
		'ngMaterial',
		'ngMessages',
		'ngAnimate',
		'ngSanitize',
		'ngTouch',
		/*
		our app modules
		*/
		'blocks.exception',
		'blocks.logger',
		'blocks.router',
		'blocks.router.404',
		'blocks.users',
		'blocks.auth',
		'blocks.editor',

		/*
		third party modules
		*/
		'ngplus',
		'ui.router',
		'restangular',
		'ngMdIcons',
		'ngCookies',
		'ngFileUpload',
		'smoothScroll',
		'textAngular',
		'FBAngular',
		'perfect_scrollbar',
		'satellizer'
		]);

})();