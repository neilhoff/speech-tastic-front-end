(function() {
    var app = angular.module('speech-tastic', ['ngRoute']);

    // configure our routes
    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider

                .when('/', {
                    templateUrl: 'templates/latest-posts.html',
                    controller: 'LatestPostsController'
                })

                .when('/posts/:slug', {
                    templateUrl: 'templates/show-post.html',
                    controller: 'ShowPostController'
                });
        }]);



    // Controllers
    app.controller('LatestPostsController', ['$scope', '$http', function($scope, $http) {


    }]);

    app.controller('ShowPostController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
        $scope.slug = $routeParams.slug;
        console.log($scope.slug);

    }]);

    // Directives
    app.directive('topNav', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/top-nav.html'
        };
    });

})();