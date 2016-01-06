import angular from 'angular';
import angularMaterial from 'angular-material';
import angularRoute from 'angular-route';
import angularFire from 'angularfire';

import DashboardController from './controllers/dashboard';
import WelcomeController from './controllers/welcome';
import AdminController from './controllers/admin';

export default angular.module('App', [angularMaterial, 'ngRoute', angularFire])
  .controller(AdminController.name, AdminController)
  .controller(WelcomeController.name, WelcomeController)
  .controller(DashboardController.name, DashboardController)

.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/:id/dashboard', {
      templateUrl: 'templates/dashboard.html',
      controller: DashboardController.name
    })
    .when('/:id/admin', {
      templateUrl: 'templates/admin.html',
      controller: AdminController.name
    })
    .otherwise({
      templateUrl: 'templates/welcome.html',
      controller: WelcomeController.name
    });

  $locationProvider.html5Mode(false);
});
