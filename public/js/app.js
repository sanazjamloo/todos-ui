(function(){
    angular.module('todoApp', ['ui-router, todos'])
    .config(MainRouter);

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MainRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "home.html",
        });

        $urlRouterProvider.otherwise('/');
    }



















})()
