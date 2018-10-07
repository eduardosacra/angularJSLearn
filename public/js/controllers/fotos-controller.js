angular.module('alurapic').controller('FotosController', function ($scope, $http) {
    $scope.foto = {
        titulo : 'Leão',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

    $scope.fotos = [];

    $http.get('/v1/fotos')
        .success(function(fotos){
            $scope.fotos = fotos;
        })
        .error(function (error) {
            console.log(error);
        });
}); 