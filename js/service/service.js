angular.module('Services', []).

/**
 * IssuePostService
 */
factory('IssuePostService', [
    '$http',
    '$q',

    function($http,$q) {
        var restUrl = 'api/dataApi.php?';
        var restConfig = {
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                //'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
            //,Credentials: true
        };
        return {
            issuePost: {},
            fetchIssuePost: function(issuePostId) {
                var self = this;
                var delay = $q.defer(); 

                $http({
                    method: 'GET',
                    url: restUrl + 'catalogid=' + issuePostId,
                }).
                success(function(data) {
                    self.issuePost=data
                    return delay.resolve(data);
                }).
                error(function(data) {
                    console.log(data)
                    return delay.reject("Can't search uploadQuantity data."); 
                });

                return delay.promise; 
            }

        };
    }
]).
factory('audioService', ['$rootScope', function($rootScope) {
    var audio = {
        playing: false,
        ready: false,
        _audio: null,
        play: function() {

            this.playing = true
            if (this._audio) this._audio.play();

        },
        load: function(src) {

            var options_audio = {
                loop: true,
                preload: "auto",
                src: src
            }
            this._audio = new Audio();

            for (var key in options_audio) {
                if (options_audio.hasOwnProperty(key) && (key in this._audio)) {
                    this._audio[key] = options_audio[key];
                }
            }
            this._audio.load();

            var self = this
            this._audio.addEventListener('play',
                function() {
                    self.playing = true;
                })
            this._audio.addEventListener('pause',
                function() {
                    self.playing = false;
                })

            this._audio.play();


        },
        stop: function() {
            this.playing = false
            if (this._audio) this._audio.pause();
        }
    }
    return audio;
}])
.factory('rollService',['$http', function($http){
        
        return {
            dataPost: function(data,url) {
                return $http({
                    method: 'POST',
                    url: url,
                    data: data
                }).
                success(function(data) {
                    console.log('报名成功');
                }).
                error(function(data) {
                    console.log(data)
                    return data;
                });
            }
        }
    }
])
