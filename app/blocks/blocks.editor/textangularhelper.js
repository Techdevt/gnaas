(function() {
    'use strict';

    angular
        .module('blocks.editor')
        .factory('textAngularHelper', textAngularHelper);

    textAngularHelper.$inject = ['Fullscreen', '$document', 'UploadService', 'logger', '_'];

    function textAngularHelper(Fullscreen, $document, UploadService, logger, _) {
        var service = {
            uploadImage: uploadImage,
            uploadVideo: uploadVideo,
            goFullScreen: goFullScreen
        };

        function uploadImage(deferred, rangler) {
            var body = $document.find('body').eq(0);
            var el = '<input id="imageElem" type="file" multiple="multiple"/>';
            var self = this;

            body.append(el);

            angular.element('#imageElem').trigger('click');

            deferred.resolve($('#imageElem').bind('change', $.proxy(function(event) {
                UploadService.upload(event.target.files)
                    .then(function(results) {
                        var link = '';
                        _.each(results, function(upFile) {
                            link = link + '<br/><img width="320" src="' + upFile.url + '"height="240" class="blog-img"/><br/>';
                        });
                        console.log(link);
                        self.$editor().wrapSelection('inserthtml', link);
                        return $('#imageElem').remove();
                    }, function(err) {
                        logger.error(err);
                    });
            }, this)));

            return false;
        }

        function uploadVideo(deferred, rangler) {
            var body = $document.find('body').eq(0);
            //filter to only input mp4 files
            var el = '<input id="videoElem" type="file" multiple="multiple" accept=""/>';
            var self = this;

            body.append(el);

            angular.element('#videoElem').trigger('click');

            deferred.resolve($('#videoElem').bind('change', $.proxy(function(event) {
                UploadService.upload(event.target.files)
                    .then(function(results) {
                        var link = '';
                        _.each(results, function(upFile) {
                            //embed = embed +'<video controls><source src="' + upFile.url + '" type="video/mp4">Im sorry; your browser doesnt support HTML5 video in WebM with VP8 or MP4 with H.264.<!-- You can embed a Flash player here, to play your mp4 video in older browsers --></video>';
                            link = link + '<div class="blogVid vidHandler" src="'+ upFile.url +'">Video'+ upFile.name +' attached.</div>';

                        });
                        console.log(self.$editor().wrapSelection);
                        self.$editor().wrapSelection('insertHTML', link, true);
                        return $('#videoElem').remove();
                    }, function(err) {
                        logger.error(err);
                    });
            }, this)));

            return false;
        }

        function goFullScreen() {
            if (Fullscreen.isEnabled()){
                Fullscreen.cancel();
            }
            else{
                Fullscreen.enable(document.getElementById('editor'));
            }
        }

        return service;
    }

})();
