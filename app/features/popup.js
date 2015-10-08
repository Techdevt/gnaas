(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('PopupService', PopupService);

    function PopupService($q, $interval, $window) {
        var Popup = {};

        Popup.url = '';
        Popup.popupWindow = null;

        Popup.open = function(url, name, options) {
            Popup.url = url;

            var stringifiedOptions = Popup.stringifyOptions(Popup.prepareOptions(options));
            var windowName = name;

            Popup.popupWindow = window.open(url, windowName, stringifiedOptions);

            window.popup = Popup.popupWindow;

            if (Popup.popupWindow && Popup.popupWindow.focus) {
                Popup.popupWindow.focus();
            }

            return Popup;
        };

        Popup.eventListener = function(redirectUri) {
            var deferred = $q.defer();

            Popup.popupWindow.addEventListener('loadstart', function(event) {
            	console.log('started');
                if (event.url.indexOf(redirectUri) !== 0) {
                    return;
                }

                var parser = document.createElement('a');
                parser.href = event.url;

                if (parser.search || parser.hash) {
                    var queryParams = parser.search.substring(1).replace(/\/$/, '');
                    var hashParams = parser.hash.substring(1).replace(/\/$/, '');
                    

                    console.log(queryParams);
                    console.log(hashParams);
                    Popup.popupWindow.close();
                }
            });

            Popup.popupWindow.addEventListener('loaderror', function() {
                deferred.reject('Authorization Failed');
            });

            return deferred.promise;
        };

        Popup.pollPopup = function() {
            var deferred = $q.defer();

            var polling = $interval(function() {
                try {
                    var documentOrigin = document.location.host;
                    var popupWindowOrigin = Popup.popupWindow.location.host;

                    if (popupWindowOrigin === documentOrigin && (Popup.popupWindow.location.search || Popup.popupWindow.location.hash)) {
                        var queryParams = Popup.popupWindow.location.search.substring(1).replace(/\/$/, '');
                        var hashParams = Popup.popupWindow.location.hash.substring(1).replace(/[\/$]/, '');
                        var hash = parseQueryString(hashParams);
                        var qs = parseQueryString(queryParams);

                        angular.extend(qs, hash);

                        if (!qs.error) {
                            deferred.resolve(qs);
                        }

                        Popup.popupWindow.close();

                        $interval.cancel(polling);
                    }
                } catch (error) {
                    // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
                }

                if (!Popup.popupWindow || Popup.popupWindow.closed || Popup.popupWindow.closed === undefined) {
                    $interval.cancel(polling);
                }
            }, 50);

            return deferred.promise;
        };

        Popup.prepareOptions = function(options) {
            options = options || {};
            var width = options.width || 500;
            var height = options.height || 500;

            return angular.extend({
                width: width,
                height: height,
                left: $window.screenX + (($window.outerWidth - width) / 2),
                top: $window.screenY + (($window.outerHeight - height) / 2.5)
            }, options);
        };


        Popup.stringifyOptions = function(options) {
            var parts = [];
            angular.forEach(options, function(value, key) {
                parts.push(key + '=' + value);
            });
            return parts.join(',');
        };

        return Popup;
    }

})();
