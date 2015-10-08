(function() {
    'use strict';
    var core = angular.module('app.core');
    core.config(toastrConfig);


    toastrConfig.$inject = ['toastr'];

    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var imageSettings = {
        imageBasePath: '../assets/images/',
        unregisteredUserImageSource: '../assets/images/default.jpg'
    };

    var keyCodes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        del: 46
    };

    var events = {
        //add events when breeze is setup
    };

    var config = {
        appErrorPrefix: 'GNAAS Error - ',
        events: events,
        backend: 'http://localhost:8080/gnaas',
        consumerId: 29,
        consumerKey: 'WIAvrQRSeIDS',
        consumerSecret: 'VPzvJv2iyrxrHxXTuc7IXQxzGLhuiK8JlM3yMKHrrbeTcaqb',
        routeForUnauthorizedAccess: 'login',
        roles: {
            superAdmin: 'SuperAdmin',
            admin: 'Admin',
            client: 'Client',
            retailer: 'Retailer',
            investor: 'Investor',
            supplier: 'Supplier',
            worker: 'Worker'
        },
        imageSettings: imageSettings,
        keycodes: keyCodes,
        version: '0.0.1'
    };

    //http://localhost:9261/


    core.constant('config', config);

    core.config(configure);

    core.run(run);


    configure.$inject = ['$logProvider', '$stateProvider', 'exceptionConfigProvider', 'routehelperConfigProvider', 'toastr', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider', '$provide'];

    function configure($logProvider, $stateProvider, exceptionConfigProvider, routehelperConfigProvider, toastr, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider, $provide) {
        configureToastr();
        configureLogging();
        configureExceptions();
        configureRouting();
        configureWithCredentials();
        configureMdTheme();
        configureTextAngular();

        function configureToastr() {
            toastr.options.timeOut = 4000;
            toastr.options.positionClass = 'toast-bottom-right';
        }

        function configureLogging() {
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
        }

        function configureMdTheme() {
            var tealCustom = $mdThemingProvider.extendPalette('teal', {
                '400': '5fcf80'
            });

            $mdThemingProvider.definePalette('myCustomPalette', {
                '50': '8CA192',
                '100': '82AB8E',
                '200': '77B68A',
                '300': '6DC086',
                '400': '009688',
                '500': '58D57D',
                '600': '4DE079',
                '700': '43EA75',
                '800': '38F571',
                '900': '2EFF6D',
                'A100': 'EFFAF3',
                'A200': 'E0F6E6',
                'A400': 'D0F1DA',
                'A700': 'C0ECCD',
                'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                   // on this palette should be dark or light
                'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                 '200', '300', '400', 'A100'],
                'contrastLightColors': undefined
            });
            $mdThemingProvider.theme('default')
            .primaryPalette('myCustomPalette', {'default': '400'})
            .accentPalette('pink', {'default': '300'});

            $mdThemingProvider
                .theme('form-dark', 'default')
                .primaryPalette('amber')
                .accentPalette('blue-grey')
                .dark();
        }

        function configureExceptions() {
            exceptionConfigProvider.config.appErrorPrefix = config.appErrorPrefix;
        }

        function configureRouting() {
            var routeCfg = routehelperConfigProvider;
            routeCfg.config.$stateProvider = $stateProvider;
            routeCfg.config.$urlRouterProvider = $urlRouterProvider;
            routeCfg.config.$locationProvider = $locationProvider;
            routeCfg.config.docTitle = 'GNAAS - ';
            routeCfg.config.resolveAlways = {
                ready: function(datacontext) {
                    return datacontext.ready();
                }
            };
        }

        function configureWithCredentials() {
            $httpProvider
                .defaults.withCredentials = true;
        }

        function configureTextAngular(){
            $provide.decorator('taOptions', ['taRegisterTool', 'textAngularHelper', '$delegate', function(taRegisterTool, textAngularHelper, taOptions){
                taOptions.toolbar = [
                ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
                ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                ['justifyLeft','justifyCenter','justifyRight'],
                ['html', 'insertImage', 'insertLink', 'insertVideo', 'FullSreen']
            ];

            taRegisterTool('FullSreen', {
                iconclass: 'fa fa-expand',
                action: function(){
                    return textAngularHelper.goFullScreen();
                }
            });
            
            taOptions.classes = {
                focussed: 'md-focused',
                toolbarButton: 'md-icon-button md-button md-primary',
                toolbarButtonActive: 'md-active',
                disabled: 'md-disabled',
                textEditor: 'md-input form-control editorText',
                htmlEditor: 'md-input form-control editorHtml'
            };
                return taOptions;
            }]);

            $provide.decorator('taTools', ['$delegate','textAngularHelper', function(taTools,textAngularHelper){
                taTools.insertVideo.action = textAngularHelper.uploadVideo;

                taTools.insertImage.action = textAngularHelper.uploadImage;
                
                return taTools;
            }]);
        }
    }

    run.$inject = ['$rootScope'];
    function run($rootScope){
        $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams){
            $rootScope.toState = toState;
        });
    }
})();
