angular.module('minhasDiretivas',[])
.directive('meuPainel', function(){
    
    //directive directive object
    var ddo = {};
    ddo.restric = "AE";

    ddo.scope = {
        titulo: '@'
    };

    //matem os elementos filhos quando carregar o html
    //para funcionar é preciso marcar qual elemento ira manter os elementos filhos 
    //com a diretiva ng-transclude
    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
});