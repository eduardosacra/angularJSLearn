angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/cadastro', {
            templateUrl: 'partials/fotoCadastro.html'
        });

        $routeProvider.otherwise({ redirectTo: '/fotos' })
    });
