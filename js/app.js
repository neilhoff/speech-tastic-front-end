(function() {
    var app = angular.module('speech-tastic', ['ngRoute']);

    // routes
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
                })

                .when('/store', {
                    templateUrl: 'templates/store.html',
                    controller: 'StoreController'
                })
            ;
        }]);



    // Controllers
    app.controller('HeaderController', ['$scope', '$location', function ($scope, $location){
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);


    app.controller('LatestPostsController', ['$scope', '$http', function($scope, $http) {
        $scope.blogActive = true;

    }]);

    app.controller('ShowPostController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
        $scope.showPostactive = true;
        $scope.slug = $routeParams.slug;
        console.log($scope.slug);

    }]);

    app.controller('StoreController', ['$scope', '$http', function($scope, $http) {
        $scope.isActive = true;

    }]);

    // Directives
    app.directive('topNav', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/top-nav.html'
        };
    });





})();