(function() {
    'use strict';
    angular.module('app.core')
        .factory('common', common);

    common.$inject = ['$location', '$http', '$q', '$rootScope', '$timeout', 'logger'];

    function common($location, $http, $q, $rootScope, $timeout, logger) {
        var title = 'Dashboard';
        var src = './bower_components/material-design-icons';
        var icons = {
            General: src + '/communication/svg/production/ic_business_48px.svg',
            Staff: src + '/action/svg/production/ic_alarm_48px.svg',
            Admin: src + '/action/svg/production/ic_alarm_48px.svg',
            Documents: src + '/action/svg/production/ic_alarm_48px.svg',
            Investments: src + '/action/svg/production/ic_alarm_48px.svg',
            Products: src + '/action/svg/production/ic_alarm_48px.svg',
            Places: src + '/action/svg/production/ic_alarm_48px.svg',
            Tasks: src + '/action/svg/production/ic_alarm_48px.svg',
            Store: src + '/action/svg/production/ic_alarm_48px.svg',
            Records: src + '/action/svg/production/ic_alarm_48px.svg'
        };

        var service = {
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,
            getTitle: getTitle,
            setTitle: setTitle,
            icons: icons,
            form2json: form2Json
        };

        return service;
        //////////////

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }

        function setTitle(value) {
            title = value;
        }

        function getTitle() {
            return title;
        }

        function form2Json(str) {
            "use strict";
            var obj, i, pt, keys, j, ev;
            if (typeof form2Json.br !== 'function') {
                form2Json.br = function(repl) {
                    if (repl.indexOf(']') !== -1) {
                        return repl.replace(/\](.+?)(,|$)/g, function($1, $2, $3) {
                            return form2Json.br($2 + '}' + $3);
                        });
                    }
                    return repl;
                };
            }
            str = '{"' + (str.indexOf('%') !== -1 ? decodeURI(str) : str) + '"}';
            obj = str.replace(/\=/g, '":"').replace(/&/g, '","').replace(/\[/g, '":{"');
            obj = JSON.parse(obj.replace(/\](.+?)(,|$)/g, function($1, $2, $3) {
                return form2Json.br($2 + '}' + $3);
            }));
            pt = ('&' + str).replace(/(\[|\]|\=)/g, '"$1"').replace(/\]"+/g, ']').replace(/&([^\[\=]+?)(\[|\=)/g, '"&["$1]$2');
            pt = (pt + '"').replace(/^"&/, '').split('&');
            for (i = 0; i < pt.length; i++) {
                ev = obj;
                keys = pt[i].match(/(?!:(\["))([^"]+?)(?=("\]))/g);
                for (j = 0; j < keys.length; j++) {
                    if (!ev.hasOwnProperty(keys[j])) {
                        if (keys.length > (j + 1)) {
                            ev[keys[j]] = {};
                        } else {
                            ev[keys[j]] = pt[i].split('=')[1].replace(/"/g, '');
                            break;
                        }
                    }
                    ev = ev[keys[j]];
                }
            }
            return obj;
        }
    }

})();
