(function() {
    'use strict';
    angular.module('akulaUsuarioInfoNg', [])
        .factory('akUsuarioInfo', akUsuarioInfo)
        .directive('akNome', akNome)
        .directive('akAvatar', akAvatar);

        function akUsuarioInfo() {
            var userInfo = {};
            var model = {
                id: '',
                nome: '',
                avatar: ''
            };

            Object.defineProperties(userInfo, {
                id: {
                    get: function() {return model.id}
                },
                avatar: {  
                    get: function() {return model.avatar}
                },
                nome: {
                    get: function() {return model.nome}
                },
                usuarioInfo: {
                    set: function(value) {model = value}
                }           
            });

            return userInfo;
        }

        function akNome(akUsuarioInfo) {
            return {
                require: '?ngModel',
                link: link,
                restrict: 'A'
            };

            function link(scope, element, attrs, ngModel) {
                if(element[0].tagName== 'INPUT') {
                    ngModel.$setViewValue(akUsuarioInfo.nome);
                    ngModel.$render();
                }
            }
        }

        function akAvatar(akUsuarioInfo) {
            return {
                link: link,
                restrict: 'A'
            };

            function link(scope, element, attrs) {
                if(element[0].tagName== 'IMG') {
                    attrs.$set('src', akUsuarioInfo.avatar);
                }
            }
        }
})();
