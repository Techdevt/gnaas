(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('UploadService', UploadService);

    UploadService.$inject = ['Upload', '$q', 'AuthToken', 'config', '_', '$rootScope'];

    function UploadService(Upload, $q, AuthToken, config, _, $rootScope) {
        var tokenObject = AuthToken.getToken();
        var service = {
            upload: upload
        };

        function upload(files) {
            if (files && files.length) {
                var defer = $q.defer();
                var promises = [];
                _.each(files, function(file) {
                    var deferred = $q.defer();
                    promises.push((function(file) {
                        Upload.upload({
                            url: config.backend + '/api/upload',
                            file: file
                        }).progress(function(evt) {
                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                            $rootScope.uploaded = progressPercentage;
                        }).success(function(data, status, headers, conf) {
                            deferred.resolve({
                                '__type': file.type,
                                'url': config.backend + '/uploads/' + data[0],
                                'orig_name': file.name
                            });
                        }).error(function(data, status, headers, config) {
                            deferred.reject(data);
                        });

                        return deferred.promise;
                    })(file));
                });


                $q.all(promises).then(function(results) {
                    defer.resolve(results);
                }, function(error) {
                    defer.reject(error);
                });

                return defer.promise;
            }
        }

        return service;
    }
})();


