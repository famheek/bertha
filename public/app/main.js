import angular from 'angular';
import angularMaterial from 'angular-material';
import angularRoute from 'angular-route';
import angularFire from 'angularfire';

import DashboardController from './controllers/dashboard';
import WelcomeController from './controllers/welcome';
import AdminController from './controllers/admin';

import dashboardTmpl from '../templates/dashboard.html!';
import adminTmpl from '../templates/admin.html!';
import welcomeTmpl from '../templates/welcome.html!';

export default angular.module('App', [angularMaterial, 'ngRoute', angularFire])
  .controller(AdminController.name, AdminController)
  .controller(WelcomeController.name, WelcomeController)
  .controller(DashboardController.name, DashboardController)

  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/:id/dashboard', {
        template: dashboardTmpl,
        controller: DashboardController.name
      })
      .when('/:id/admin', {
        template: adminTmpl,
        controller: AdminController.name
      })
      .otherwise({
        template: welcomeTmpl,
        controller: WelcomeController.name
      });

    $locationProvider.html5Mode(false);
  });
