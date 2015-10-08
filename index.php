<!DOCTYPE html>
<html>
	<head>
		<base href="/gnaas/wp-content/themes/gnaas/">
		<title>GNAAS</title>
		<link rel="icon" href="favicon.ico" type="image/ico" sizes="16x16">
		<?php wp_head(); ?>
	</head>

	<body>
		<div id="page" ng-app="app" layout="column" ng-controller="Gnaas">
			<div data-ng-include="'app/layout/shell.html'"></div>
		</div>
		<?php wp_footer(); ?>
	</body>

</html>