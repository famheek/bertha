import angular from 'angular';
import mainModule from './main';

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name]);
});
