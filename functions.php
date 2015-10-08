<?php
function my_scripts() {

	//register styles
    wp_register_style( 
        'styles', 
        get_template_directory_uri() . '/style.css'
    );

	wp_register_style( 
		'toastr', 
		get_template_directory_uri() . '/bower_components/toastr/toastr.min.css'
	);

	wp_register_style( 
		'font-awesome', 
		get_template_directory_uri() . '/bower_components/font-awesome/css/font-awesome.min.css'
	);

	wp_register_style( 
		'angular-material', 
		get_template_directory_uri() . '/bower_components/angular-material/angular-material.min.css'
	);

	wp_register_style( 
		'textAngular', 
		get_template_directory_uri() . '/bower_components/textAngular/dist/textAngular.css'
	);

	wp_register_style( 
		'perfect-scrollbar', 
		get_template_directory_uri() . '/bower_components/perfect-scrollbar/min/perfect-scrollbar.min.css'
	);
	wp_enqueue_style( array('styles', 'toastr','font-awesome','angular-material','textAngular','perfect-scrollbar') );




	//enqueue_scripts
	wp_enqueue_script(
		'modernizr',
		get_stylesheet_directory_uri() . '/bower_components/modernizr/modernizr.js'
	);
    wp_enqueue_script(
		'jquery',
		get_stylesheet_directory_uri() . '/bower_components/jquery/dist/jquery.js'
	);
    wp_enqueue_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/bower_components/angular/angular.js'
	);
    wp_enqueue_script(
		'angular-animate',
		get_stylesheet_directory_uri() . '/bower_components/angular-animate/angular-animate.js'
	);
    wp_enqueue_script(
		'angular-cookies',
		get_stylesheet_directory_uri() . '/bower_components/angular-cookies/angular-cookies.js'
	);
    wp_enqueue_script(
		'angular-touch',
		get_stylesheet_directory_uri() . '/bower_components/angular-touch/angular-touch.js'
	);
    wp_enqueue_script(
		'angular-sanitize',
		get_stylesheet_directory_uri() . '/bower_components/angular-sanitize/angular-sanitize.js'
	);
    wp_enqueue_script(
		'lodash',
		get_stylesheet_directory_uri() . '/bower_components/lodash/lodash.js'
	);
    wp_enqueue_script(
        'mailchimp',
        'http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    );
    wp_enqueue_script(
        'oauth_signature',
        get_stylesheet_directory_uri() . '/bower_components/oauth-signature/dist/oauth-signature.min.js'
    );
    
    wp_enqueue_script(
		'restangular',
		get_stylesheet_directory_uri() . '/bower_components/restangular/dist/restangular.js'
	);
    wp_enqueue_script(
		'angular-ui-router',
		get_stylesheet_directory_uri() . '/bower_components/angular-ui-router/release/angular-ui-router.js'
	);
    wp_enqueue_script(
		'toastr',
		get_stylesheet_directory_uri() . '/bower_components/toastr/toastr.js'
	);
    wp_enqueue_script(
		'moment',
		get_stylesheet_directory_uri() . '/bower_components/moment/moment.js'
	);
    wp_enqueue_script(
		'ng-file-upload',
		get_stylesheet_directory_uri() . '/bower_components/ng-file-upload/ng-file-upload.js'
	);
    wp_enqueue_script(
		'angular.plus',
		get_stylesheet_directory_uri() . '/bower_components/extras.angular.plus/ngplus-overlay.js'
	);
    wp_enqueue_script(
		'angular-cookie',
		get_stylesheet_directory_uri() . '/bower_components/angular-cookie/angular-cookie.js'
	);
    wp_enqueue_script(
		'ng-token-auth',
		get_stylesheet_directory_uri() . '/bower_components/ng-token-auth/dist/ng-token-auth.js'
	);
    wp_enqueue_script(
		'angular-material-icons',
		get_stylesheet_directory_uri() . '/bower_components/angular-material-icons/angular-material-icons.min.js'
	);
    wp_enqueue_script(
		'angular-aria',
		get_stylesheet_directory_uri() . '/bower_components/angular-aria/angular-aria.js'
	);
    wp_enqueue_script(
		'svg-morpheus',
		get_stylesheet_directory_uri() . '/bower_components/svg-morpheus/compile/minified/svg-morpheus.js'
	);
    wp_enqueue_script(
		'morlock',
		get_stylesheet_directory_uri() . '/bower_components/morlock/dist/morlock.js'
	);
    wp_enqueue_script(
		'TweenMax',
		get_stylesheet_directory_uri() . '/bower_components/gsap/src/uncompressed/TweenMax.js'
	);
    wp_enqueue_script(
		'angular-material',
		get_stylesheet_directory_uri() . '/bower_components/angular-material/angular-material.js'
	);
    wp_enqueue_script(
		'angular-smooth-scroll',
		get_stylesheet_directory_uri() . '/bower_components/ngSmoothScroll/angular-smooth-scroll.js'
	);
    wp_enqueue_script(
		'angular-messages',
		get_stylesheet_directory_uri() . '/bower_components/angular-messages/angular-messages.js'
	);
    wp_enqueue_script(
		'rangy-core',
		get_stylesheet_directory_uri() . '/bower_components/rangy/rangy-core.js'
	);
    wp_enqueue_script(
		'rangy-classapplier',
		get_stylesheet_directory_uri() . '/bower_components/rangy/rangy-classapplier.js'
	);
    wp_enqueue_script(
		'rangy-highlighter',
		get_stylesheet_directory_uri() . '/bower_components/rangy/rangy-highlighter.js'
	);
    wp_enqueue_script(
		'rangy-selectionsaverestore',
		get_stylesheet_directory_uri() . '/bower_components/rangy/rangy-selectionsaverestore.js'
	);
    wp_enqueue_script(
		'rangy-serializer',
		get_stylesheet_directory_uri() . '/bower_components/rangy/rangy-serializer.js'
	);
    wp_enqueue_script(
		'rangy-textrange',
		get_stylesheet_directory_uri() . '/bower_components/rangy/rangy-textrange.js'
	);
    wp_enqueue_script(
		'textAngular',
		get_stylesheet_directory_uri() . '/bower_components/textAngular/dist/textAngular.js'
	);
    wp_enqueue_script(
		'textAngular-sanitize',
		get_stylesheet_directory_uri() . '/bower_components/textAngular/dist/textAngular-sanitize.js'
	);
    wp_enqueue_script(
		'textAngularSetup',
		get_stylesheet_directory_uri() . '/bower_components/textAngular/dist/textAngularSetup.js'
	);
    wp_enqueue_script(
		'angular-fullscreen',
		get_stylesheet_directory_uri() . '/bower_components/angular-fullscreen/src/angular-fullscreen.js'
	);
    wp_enqueue_script(
		'perfect-scrollbar',
		get_stylesheet_directory_uri() . '/bower_components/perfect-scrollbar/src/perfect-scrollbar.js'
	);
    wp_enqueue_script(
        'satellizer',
        get_stylesheet_directory_uri() . '/bower_components/satellizer/satellizer.min.js'
    );
    wp_enqueue_script(
		'angular-perfect-scrollbar',
		get_stylesheet_directory_uri() . '/bower_components/angular-perfect-scrollbar/src/angular-perfect-scrollbar.js'
	);


	wp_enqueue_script(
		'calculator-module',
		get_stylesheet_directory_uri() . '/app/home/General/Calculator/calculator.module.js'
	);

	wp_enqueue_script(
		'sc',
   		get_stylesheet_directory_uri() . '/app/home/General/Calculator/SC/sc.js'
   	);

   	wp_enqueue_script(
		'cc',
   		get_stylesheet_directory_uri() . '/app/home/General/Calculator/CC/cc.js'
   	);
   	wp_enqueue_script(
		'content-module',	
   		get_stylesheet_directory_uri() . '/app/home/Admin/Content/content.module.js'
   	);
   	wp_enqueue_script(
		'slideshow',
    	get_stylesheet_directory_uri() . '/app/home/Admin/Content/slideshow/slideshow.js'
    );
    wp_enqueue_script(
		'settings',
    	get_stylesheet_directory_uri() . '/app/home/Admin/Content/settings/settings.js'
    );
    wp_enqueue_script(
		'contact',
    	get_stylesheet_directory_uri() . '/app/home/Admin/Content/contact/contact.js'
    );
    wp_enqueue_script(
		'tasks-module',
    	get_stylesheet_directory_uri() . '/app/home/Tasks/tasks.module.js'
    );
    wp_enqueue_script(
		'projects',
    	get_stylesheet_directory_uri() . '/app/home/Tasks/Projects/projects.js'
    );
    wp_enqueue_script(
		'staff-module',
    	get_stylesheet_directory_uri() . '/app/home/Staff/staff.module.js'
    );
    wp_enqueue_script(
		'workers',
    	get_stylesheet_directory_uri() . '/app/home/Staff/Workers/workers.js'
    );
    wp_enqueue_script(
		'suppliers',
    	get_stylesheet_directory_uri() . '/app/home/Staff/Suppliers/suppliers.js'
    );
    wp_enqueue_script(
		'retailers',
    	get_stylesheet_directory_uri() . '/app/home/Staff/Retailers/retailers.js'
    );
    wp_enqueue_script(
		'sales-module',
    	get_stylesheet_directory_uri() . '/app/home/Sales/sales.module.js'
    );
    wp_enqueue_script(
		'purchases',
    	get_stylesheet_directory_uri() . '/app/home/Sales/purchases/purchases.js'
    );
    wp_enqueue_script(
		'sr',
    	get_stylesheet_directory_uri() . '/app/home/Sales/SR/sr.js'
    );
    wp_enqueue_script(
		'returns',
    	get_stylesheet_directory_uri() . '/app/home/Sales/Returns/returns.js'
    );
    wp_enqueue_script(
		'records-module',
    	get_stylesheet_directory_uri() . '/app/home/Records/records.module.js'
    );
    wp_enqueue_script(
		'conversations',
    	get_stylesheet_directory_uri() . '/app/home/Records/Conversations/conversations.js'
    );
    wp_enqueue_script(
		'products-module',
    	get_stylesheet_directory_uri() . '/app/home/Products/products.module.js'
    );
    wp_enqueue_script(
		'refills',
    	get_stylesheet_directory_uri() . '/app/home/Products/Refills/refills.js'
    );
    wp_enqueue_script(
		'inventory',
    	get_stylesheet_directory_uri() . '/app/home/Products/Inventory/inventory.js'
    );
    wp_enqueue_script(
		'investment-module',
    	get_stylesheet_directory_uri() . '/app/home/Investments/investment.module.js'
    );
    wp_enqueue_script(
		'payments',
    	get_stylesheet_directory_uri() . '/app/home/Investments/Payments/payments.js'
    );
    wp_enqueue_script(
		'investors',
    	get_stylesheet_directory_uri() . '/app/home/Investments/Investors/investors.js'
    );
    wp_enqueue_script(
		'investables',
    	get_stylesheet_directory_uri() . '/app/home/Investments/Investables/investables.js'
    );
    wp_enqueue_script(
		'is',
    	get_stylesheet_directory_uri() . '/app/home/Investments/IS/is.js'
    );
    wp_enqueue_script(
		'holdings',
    	get_stylesheet_directory_uri() . '/app/home/Investments/Holdings/holdings.js'
    );
    wp_enqueue_script(
		'general-module',
    	get_stylesheet_directory_uri() . '/app/home/General/general.module.js'
    );
    wp_enqueue_script(
		'prices',
    	get_stylesheet_directory_uri() . '/app/home/General/Prices/prices.js'
    );
    wp_enqueue_script(
		'contacts',
    	get_stylesheet_directory_uri() . '/app/home/General/Contacts/contacts.js'
    );
    wp_enqueue_script(
		'documents-module',
    	get_stylesheet_directory_uri() . '/app/home/Documents/documents.module.js'
    );
    wp_enqueue_script(
		'receipts',
    	get_stylesheet_directory_uri() . '/app/home/Documents/Receipts/receipts.js'
    );
    wp_enqueue_script(
		'invoice',
    	get_stylesheet_directory_uri() . '/app/home/Documents/Invoice/invoice.js'
    );
 	wp_enqueue_script(
		'admin-module',
    	get_stylesheet_directory_uri() . '/app/home/Admin/admin.module.js'
    );
    wp_enqueue_script(
		'analytics',
    	get_stylesheet_directory_uri() . '/app/home/Admin/analytics/analytics.js'
    );
    wp_enqueue_script(
		'permissions',
    	get_stylesheet_directory_uri() . '/app/home/Admin/Permissions/permissions.js'
    );
    wp_enqueue_script(
		'users-module',
    	get_stylesheet_directory_uri() . '/app/blocks/users/users.module.js'
    );
    wp_enqueue_script(
		'signup',
    	get_stylesheet_directory_uri() . '/app/blocks/users/signup/signup.js'
    );
    wp_enqueue_script(
		'signup-matchpass',
    	get_stylesheet_directory_uri() . '/app/blocks/users/signup/matchpass.js'
    );
    wp_enqueue_script(
		'signup-route',
    	get_stylesheet_directory_uri() . '/app/blocks/users/signup/config.route.js'
    );
    wp_enqueue_script(
        'login',
        get_stylesheet_directory_uri() . '/app/blocks/users/login/login.js'
    );
    wp_enqueue_script(
        'login-route',
        get_stylesheet_directory_uri() . '/app/blocks/users/login/config.route.js'
    );
    wp_enqueue_script(
		'404-module',
    	get_stylesheet_directory_uri() . '/app/blocks/router/404/404.module.js'
    );
    wp_enqueue_script(
		'404-route',
    	get_stylesheet_directory_uri() . '/app/blocks/router/404/config.route.js'
    );
    wp_enqueue_script(
		'tasks-route',
    	get_stylesheet_directory_uri() . '/app/home/Tasks/config.route.js'
    );
    wp_enqueue_script(
		'staff-route',
    	get_stylesheet_directory_uri() . '/app/home/Staff/config.route.js'
    );
    wp_enqueue_script(
		'sales-route',
    	get_stylesheet_directory_uri() . '/app/home/Sales/config.route.js'
    );
    wp_enqueue_script(
		'records-route',
    	get_stylesheet_directory_uri() . '/app/home/Records/config.route.js'
    );
    wp_enqueue_script(
		'products-route',
    	get_stylesheet_directory_uri() . '/app/home/Products/config.route.js'
    );
    wp_enqueue_script(
		'locations-module',
    	get_stylesheet_directory_uri() . '/app/home/Locations/locations.module.js'
    );
    wp_enqueue_script(
		'locations',
    	get_stylesheet_directory_uri() . '/app/home/Locations/locations.js'
    );
    wp_enqueue_script(
		'locations-route',
    	get_stylesheet_directory_uri() . '/app/home/Locations/config.route.js'
    );
    wp_enqueue_script(
		'investment-route',
    	get_stylesheet_directory_uri() . '/app/home/Investments/config.route.js'
    );
    wp_enqueue_script(
		'general-route',
    	get_stylesheet_directory_uri() . '/app/home/General/config.route.js'
    );
    wp_enqueue_script(
		'home-module',
    	get_stylesheet_directory_uri() . '/app/home/home.module.js'
    );
    wp_enqueue_script(
		'documents-route',
    	get_stylesheet_directory_uri() . '/app/home/Documents/config.route.js'
    );
    wp_enqueue_script(
		'admin-route',
    	get_stylesheet_directory_uri() . '/app/home/Admin/config.route.js'
    );
    wp_enqueue_script(
		'routerhelper-module',
    	get_stylesheet_directory_uri() . '/app/blocks/router/router.module.js'
    );
    wp_enqueue_script(
		'routerhelper',
    	get_stylesheet_directory_uri() . '/app/blocks/router/routerhelper.js'
    );
    wp_enqueue_script(
		'logger-module',
    	get_stylesheet_directory_uri() . '/app/blocks/logger/logger.module.js'
    );
    wp_enqueue_script(
		'logger',
    	get_stylesheet_directory_uri() . '/app/blocks/logger/logger.js'
    );
    wp_enqueue_script(
		'exception-module',
    	get_stylesheet_directory_uri() . '/app/blocks/exception/exception.module.js'
    );
    wp_enqueue_script(
		'exception',
    	get_stylesheet_directory_uri() . '/app/blocks/exception/exception.js'
    );
    wp_enqueue_script(
		'exception-handler',
    	get_stylesheet_directory_uri() . '/app/blocks/exception/exception-handler.js'
    );
    wp_enqueue_script(
		'editor-module',
    	get_stylesheet_directory_uri() . '/app/blocks/blocks.editor/editor.module.js'
    );
    wp_enqueue_script(
		'textangularhelper',
    	get_stylesheet_directory_uri() . '/app/blocks/blocks.editor/textangularhelper.js'
    );
    wp_enqueue_script(
		'auth-module',
    	get_stylesheet_directory_uri() . '/app/blocks/Auth/auth.module.js'
    );
    wp_enqueue_script(
		'roleManager',
    	get_stylesheet_directory_uri() . '/app/blocks/Auth/roleManager.js'
    );
    wp_enqueue_script(
		'authorization',
    	get_stylesheet_directory_uri() . '/app/blocks/Auth/authorization.js'
    );
    wp_enqueue_script(
		'authToken',
    	get_stylesheet_directory_uri() . '/app/blocks/Auth/authToken.js'
    );
    wp_enqueue_script(
		'auth',
    	get_stylesheet_directory_uri() . '/app/blocks/Auth/auth.js'
    );
    wp_enqueue_script(
		'auth-interceptor',
    	get_stylesheet_directory_uri() . '/app/blocks/Auth/auth-interceptor.js'
    );
    wp_enqueue_script(
		'widgets-module',
    	get_stylesheet_directory_uri() . '/app/widgets/widgets.module.js'
    );
    wp_enqueue_script(
		'header',
    	get_stylesheet_directory_uri() . '/app/widgets/header.js'
    );
    wp_enqueue_script(
		'footer',
    	get_stylesheet_directory_uri() . '/app/widgets/footer.js'
    );
    wp_enqueue_script(
		'ccDate',
    	get_stylesheet_directory_uri() . '/app/widgets/ccDate.js'
    );
    wp_enqueue_script(
		'layout-module',
    	get_stylesheet_directory_uri() . '/app/layout/layout.module.js'
    );
    wp_enqueue_script(
		'topnav',
    	get_stylesheet_directory_uri() . '/app/layout/topnav.js'
    );
    wp_enqueue_script(
		'sidebar',
    	get_stylesheet_directory_uri() . '/app/layout/sidebar.js'
    );
    wp_enqueue_script(
		'shell',
    	get_stylesheet_directory_uri() . '/app/layout/shell.js'
    );
    wp_enqueue_script(
		'landing-module',
    	get_stylesheet_directory_uri() . '/app/landing/landing.module.js'
    );

    wp_enqueue_script(
		'landing',
    	get_stylesheet_directory_uri() . '/app/landing/landing.js'
    );
    wp_enqueue_script(
		'landing-route',
    	get_stylesheet_directory_uri() . '/app/landing/config.routes.js'
    );
    wp_enqueue_script(
		'blog',
    	get_stylesheet_directory_uri() . '/app/landing/blog.js'
    );

    wp_enqueue_script(
		'BlogService',
    	get_stylesheet_directory_uri() . '/app/landing/BlogService.js'
    );

    wp_enqueue_script(
		'filters-module',
    	get_stylesheet_directory_uri() . '/app/filters/filters.module.js'
    );

    wp_enqueue_script(
		'filter-unique',
    	get_stylesheet_directory_uri() . '/app/filters/unique.js'
    );

    wp_enqueue_script(
		'services-module',
    	get_stylesheet_directory_uri() . '/app/features/services.module.js'
    );

    wp_enqueue_script(
        'popup',
        get_stylesheet_directory_uri() . '/app/features/popup.js'
    );

    wp_enqueue_script(
		'features-menu',
    	get_stylesheet_directory_uri() . '/app/features/menu.js'
    );

    wp_enqueue_script(
		'UploadService',
    	get_stylesheet_directory_uri() . '/app/features/UploadService.js'
    );

    wp_enqueue_script(
		'directives-module',
    	get_stylesheet_directory_uri() . '/app/directives/directives.module.js'
    );

    wp_enqueue_script(
		'menu-toggle',
    	get_stylesheet_directory_uri() . '/app/directives/menu-toggle.js'
    );

    wp_enqueue_script(
		'loop-image-slides',
    	get_stylesheet_directory_uri() . '/app/directives/loop-image-slides.js'
    );

    wp_enqueue_script(
		'elevate-zoom',
    	get_stylesheet_directory_uri() . '/app/directives/elevate-zoom.js'
    );

    wp_enqueue_script(
		'sticky-nav',
    	get_stylesheet_directory_uri() . '/app/directives/sticky-nav.js'
    );

    wp_enqueue_script(
		'data-module',
    	get_stylesheet_directory_uri() . '/app/data/data.module.js'
    );

    wp_enqueue_script(
		'datacontext',
    	get_stylesheet_directory_uri() . '/app/data/datacontext.js'
    );

    wp_enqueue_script(
		'home',
    	get_stylesheet_directory_uri() . '/app/home/home.js'
    );

    wp_enqueue_script(
		'home-config',
    	get_stylesheet_directory_uri() . '/app/home/config.route.js'
    );

    wp_enqueue_script(
		'core-module',
    	get_stylesheet_directory_uri() . '/app/core/core.module.js'
    );
    wp_enqueue_script(
		'xhr',
    	get_stylesheet_directory_uri() . '/app/core/xhr.js'
    );

    wp_enqueue_script(
		'core-dialog',
    	get_stylesheet_directory_uri() . '/app/core/dialog.js'
    );
    wp_enqueue_script(
		'core-constants',
    	get_stylesheet_directory_uri() . '/app/core/constants.js'
    );

    wp_enqueue_script(
		'core-config',
    	get_stylesheet_directory_uri() . '/app/core/config.js'
    );

    wp_enqueue_script(
        'common',
        get_stylesheet_directory_uri() . '/app/core/common.js'
    );

    wp_enqueue_script(
		'breeze-config',
    	get_stylesheet_directory_uri() . '/app/core/config.breeze.js'
    );


    wp_enqueue_script(
		'animation-module-script',
    	get_stylesheet_directory_uri() . '/app/animations/animations.module.js'
    );

    wp_enqueue_script(
		'fade-in-animation-script',
    	get_stylesheet_directory_uri() . '/app/animations/fade-in-animation.js'
    );

    wp_enqueue_script(
		'chat-module-script',
    	get_stylesheet_directory_uri() . '/app/Chat/chat.module.js'
    );

    wp_enqueue_script(
		'chat-script',
    	get_stylesheet_directory_uri() . '/app/Chat/chat.js'
    );

    wp_enqueue_script(
		'app-module-script',
    	get_stylesheet_directory_uri() . '/app/app.module.js'
    );

    wp_enqueue_script(
		'gnaas-script',
    	get_stylesheet_directory_uri() . '/app/gnaas.js'
    );

	wp_localize_script(
		'app-module-script',
		'myLocalized',
		array(
			'app' => trailingslashit( get_template_directory_uri() ) . 'app/',
			'animations' => trailingslashit( get_template_directory_uri() ) . 'app/animations/',
			'blocks' => trailingslashit( get_template_directory_uri() ) . 'app/blocks/',
			'Chat' => trailingslashit( get_template_directory_uri() ) . 'app/Chat/',
			'core' => trailingslashit( get_template_directory_uri() ) . 'app/core/',
			'home' => trailingslashit( get_template_directory_uri() ) . 'app/home/',
			'data' => trailingslashit( get_template_directory_uri() ) . 'app/data/',
			'directives' => trailingslashit( get_template_directory_uri() ) . 'app/directives/',
			'features' => trailingslashit( get_template_directory_uri() ) . 'app/features/',
			'filters' => trailingslashit( get_template_directory_uri() ) . 'app/filters/',
			'landing' => trailingslashit( get_template_directory_uri() ) . 'app/landing/',
			'layout' => trailingslashit( get_template_directory_uri() ) . 'app/layout/',
			'widgets' => trailingslashit( get_template_directory_uri() ) . 'app/widgets/',
            'nonce' => wp_create_nonce( 'wp_rest' )
			)
	);
}

function my_add_link_target( $html ) {
	$html = preg_replace( '/(<a.*")>/', '$1 target="_self">', $html );
	return $html;
}

add_action( 'wp_enqueue_scripts', 'my_scripts' );
//add_filter( 'image_send_to_editor', 'my_add_link_target', 10 );
add_theme_support( 'post-thumbnails' ); 