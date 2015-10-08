(function(){
	'use strict';

	angular
		.module('app.admin')
		.controller('Analytics', Analytics);

	Analytics.$inject = ['XHR','logger'];
	function Analytics(XHR,logger){
		var vm = this;

	}
})();