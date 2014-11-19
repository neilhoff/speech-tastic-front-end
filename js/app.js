(function() {
    var app = angular.module('speech-tastic', []);

    // Controllers
    app.controller('SiteController', ['$http', function($http) {

    }]);

    app.directive('topNav', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/top-nav.html'
        };
    });

    app.directive('latestPosts', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/latest-posts.html'
        };
    });

})();