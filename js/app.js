(function() {
    var app = angular.module('speech-tastic', ['ngRoute']);

    // routes
    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider

                .when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeController'
                })

                .when('/posts/:slug', {
                    templateUrl: 'templates/show-post.html',
                    controller: 'ShowPostController'
                })

                .when('/store', {
                    templateUrl: 'templates/store.html',
                    controller: 'StoreController'
                })

                .when('/about', {
                    templateUrl: 'templates/about.html',
                    controller: 'AboutController'
                })

                .when('/blog', {
                    templateUrl: 'templates/latest-posts.html',
                    controller: 'LatestPostsController'
                })

            ;
        }]);



    // Controllers
    app.controller('HomeController', ['$scope', '$http', function($scope, $http) {


    }]);

    app.controller('ActivePageController', ['$location', function ($location){
        var page = this;
        page.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);


    app.controller('LatestPostsController', ['$scope', '$http', function($scope, $http) {


    }]);

    app.controller('ShowPostController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

        $scope.slug = $routeParams.slug;
        console.log($scope.slug);

    }]);

    app.controller('StoreController', ['$scope', '$http', function($scope, $http) {


    }]);

    app.controller('AboutController', ['$scope', '$http', function($scope, $http) {


    }]);


    // Directives
    app.directive('topNav', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/top-nav.html'
        };
    });






})();